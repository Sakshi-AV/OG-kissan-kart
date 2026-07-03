require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });

const path = require('path');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { createPool } = require('./db');

const app = express();

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'change_me';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

app.use(express.json({ limit: '200kb' }));
app.use(cors({ origin: true, credentials: true }));

const rootDir = path.join(__dirname, '..', '..');
const publicDir = rootDir; // serve index.html/script.js/styles.css from repo root

function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

function authRequired(req, res, next) {
  const header = req.headers['authorization'] || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Missing token' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (e) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.use(express.static(publicDir, {
  // prevents accidental serving of server/ sources directly
  extensions: ['html', 'js', 'css', 'png', 'jpg', 'jpeg', 'svg', 'ico']
}));

app.get('/health', (req, res) => res.json({ ok: true }));

let pool;
async function start() {
  pool = await createPool(process.env);

  // Ensure we can reach DB (or fallback)
  await pool.query('SELECT 1');


  // -------- Auth --------
  app.post('/api/auth/register', async (req, res) => {
    try {
      const { email, password, name } = req.body || {};
      if (!email || !password || !name) {
        return res.status(400).json({ error: 'email, password, name are required' });
      }

      const emailNorm = String(email).trim().toLowerCase();
      const nameClean = String(name).trim();

      const passwordHash = await bcrypt.hash(String(password), 10);

      const [result] = await pool.query(
        'INSERT INTO users (email, password_hash, name) VALUES (?, ?, ?)',
        [emailNorm, passwordHash, nameClean]
      );

      return res.status(201).json({
        user: { id: result.insertId, email: emailNorm, name: nameClean }
      });
    } catch (e) {
      if (String(e && e.code).includes('ER_DUP_ENTRY')) {
        return res.status(409).json({ error: 'Email already registered' });
      }
      console.error(e);
      return res.status(500).json({ error: 'Server error' });
    }
  });

  app.post('/api/auth/login', async (req, res) => {
    try {
      const { email, password } = req.body || {};
      if (!email || !password) {
        return res.status(400).json({ error: 'email and password are required' });
      }

      const emailNorm = String(email).trim().toLowerCase();
      const [rows] = await pool.query('SELECT id, email, password_hash, name FROM users WHERE email = ? LIMIT 1', [emailNorm]);

      if (!rows.length) return res.status(401).json({ error: 'Invalid credentials' });

      const user = rows[0];
      const ok = await bcrypt.compare(String(password), user.password_hash);
      if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

      const token = signToken({ sub: user.id, email: user.email, name: user.name });
      return res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: 'Server error' });
    }
  });

  // -------- Listings --------
  app.post('/api/listings', authRequired, async (req, res) => {
    try {
      const { crop, quantity, location, price } = req.body || {};
      if (!crop || !quantity || !location || !price) {
        return res.status(400).json({ error: 'crop, quantity, location, price are required' });
      }

      const [result] = await pool.query(
        'INSERT INTO listings (farmer_id, crop, quantity, location, price) VALUES (?, ?, ?, ?, ?)',
        [req.user.sub, String(crop).trim(), String(quantity).trim(), String(location).trim(), String(price).trim()]
      );

      return res.status(201).json({
        id: result.insertId,
        farmer_id: req.user.sub,
        crop: String(crop).trim(),
        quantity: String(quantity).trim(),
        location: String(location).trim(),
        price: String(price).trim()
      });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: 'Server error' });
    }
  });

  // Public: buyer visibility
  app.get('/api/listings', async (req, res) => {
    try {
      const [rows] = await pool.query(`
        SELECT l.id, l.crop, l.quantity, l.location, l.price, u.name AS farmer_name, l.created_at
        FROM listings l
        JOIN users u ON u.id = l.farmer_id
        ORDER BY l.created_at DESC
        LIMIT 50
      `);

      return res.json({ listings: rows });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: 'Server error' });
    }
  });

  // Private: farmer dashboard
  app.get('/api/listings/me', authRequired, async (req, res) => {
    try {
      const [rows] = await pool.query(`
        SELECT l.id, l.crop, l.quantity, l.location, l.price, l.created_at
        FROM listings l
        WHERE l.farmer_id = ?
        ORDER BY l.created_at DESC
      `, [req.user.sub]);

      return res.json({ listings: rows });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: 'Server error' });
    }
  });

  app.listen(PORT, () => {
    console.log(`Kissan Cart backend running at http://127.0.0.1:${PORT}`);
  });
}

start().catch((e) => {
  console.error('Failed to start server:', e);
  process.exit(1);
});

