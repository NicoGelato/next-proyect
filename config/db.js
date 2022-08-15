import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASS,
  database: "productsdb",
});

export {
    pool
}