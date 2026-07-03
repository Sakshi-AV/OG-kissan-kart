const mysql = require('mysql2/promise');

function getDbConfig(env) {
  const {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME
  } = env;

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

async function createPool(env) {
  const pool = mysql.createPool(getDbConfig(env));
  await initDb(pool);
  return pool;
}

module.exports = { createPool };

