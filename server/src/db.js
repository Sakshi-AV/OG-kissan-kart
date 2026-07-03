const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

function getDbConfig(env) {
  const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = env;

  if (!DB_HOST || !DB_USER || !DB_NAME) {
    throw new Error('Missing DB_HOST/DB_USER/DB_NAME in environment');
  }

  return {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD || '',
    database: DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  };
}

async function initDb(pool) {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      email VARCHAR(255) NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      name VARCHAR(150) NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      UNIQUE KEY uniq_users_email (email)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS listings (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      farmer_id BIGINT UNSIGNED NOT NULL,
      crop VARCHAR(255) NOT NULL,
      quantity VARCHAR(120) NOT NULL,
      location VARCHAR(255) NOT NULL,
      price VARCHAR(255) NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      KEY idx_listings_farmer (farmer_id),
      CONSTRAINT fk_listings_farmer
        FOREIGN KEY (farmer_id) REFERENCES users(id)
        ON DELETE CASCADE
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `);
}

function getFallbackFile() {
  const base = path.join(__dirname, '..', '..');
  return path.join(base, 'server-db-fallback.json');
}

function readFallbackState() {
  const file = getFallbackFile();
  if (!fs.existsSync(file)) return { users: [], listings: [] };
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return { users: [], listings: [] };
  }
}

function writeFallbackState(state) {
  const file = getFallbackFile();
  fs.writeFileSync(file, JSON.stringify(state, null, 2), 'utf8');
}

function createFallbackDb() {
  const state = readFallbackState();
  let nextUserId = Math.max(0, ...state.users.map(u => Number(u.id) || 0)) + 1;
  let nextListingId = Math.max(0, ...state.listings.map(l => Number(l.id) || 0)) + 1;

  return {
    // very small query subset used by index.js
    async query(sql, params) {
      sql = String(sql || '').trim();

      // smoke test
      if (sql === 'SELECT 1') return [[{ '1': 1 }], null];

      // register insert
      if (sql.startsWith('INSERT INTO users')) {
        const [email, passwordHash, name] = params;
        const exists = state.users.find(u => u.email === email);
        if (exists) {
          const err = new Error('Duplicate');
          err.code = 'ER_DUP_ENTRY';
          throw err;
        }
        const id = nextUserId++;
        state.users.push({ id, email, password_hash: passwordHash, name, created_at: new Date().toISOString() });
        writeFallbackState(state);
        return [[{ insertId: id }], null];
      }

      // login select
      if (sql.startsWith('SELECT id, email, password_hash, name FROM users')) {
        const [email] = params;
        const user = state.users.find(u => u.email === email);
        return [user ? [user] : [], null];
      }

      // listings insert
      if (sql.startsWith('INSERT INTO listings')) {
        const farmerId = params[0];
        const crop = params[1];
        const quantity = params[2];
        const location = params[3];
        const price = params[4];
        const id = nextListingId++;
        state.listings.push({
          id,
          farmer_id: farmerId,
          crop,
          quantity,
          location,
          price,
          created_at: new Date().toISOString(),
          farmer_name: state.users.find(u => u.id === Number(farmerId))?.name || ''
        });
        writeFallbackState(state);
        return [[{ insertId: id }], null];
      }

      // public listings
      if (sql.startsWith('SELECT l.id, l.crop, l.quantity')) {
        const rows = [...state.listings]
          .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
          .slice(0, 50)
          .map(l => ({
            id: l.id,
            crop: l.crop,
            quantity: l.quantity,
            location: l.location,
            price: l.price,
            farmer_name: l.farmer_name,
            created_at: l.created_at
          }));
        return [rows, null];
      }

      // private listings
      if (sql.startsWith('SELECT l.id, l.crop, l.quantity, l.location, l.price')) {
        const farmerId = params[0];
        const rows = [...state.listings]
          .filter(l => Number(l.farmer_id) === Number(farmerId))
          .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
          .map(l => ({
            id: l.id,
            crop: l.crop,
            quantity: l.quantity,
            location: l.location,
            price: l.price,
            created_at: l.created_at
          }));
        return [rows, null];
      }

      throw new Error(`Fallback DB: Unsupported query: ${sql}`);
    }
  };
}

async function createPool(env) {
  // If DB env vars are missing or MySQL auth fails, fall back to file-based storage.
  const fallbackMode = String(env.USE_FALLBACK_DB || '').toLowerCase() === 'true';
  if (fallbackMode) return createFallbackDb();

  try {
    const pool = mysql.createPool(getDbConfig(env));
    await initDb(pool);
    return pool;
  } catch (e) {
    console.warn('MySQL unavailable, using fallback storage:', e.message || e);
    return createFallbackDb();
  }
}

module.exports = { createPool };

