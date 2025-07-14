const express = require('express');
const app = express();
const port = 5002;
require('dotenv').config();
const pool = require('./db/pool');

const authRoutes = require('./routes/auth');
const reviewRoutes = require('./routes/reviews');

app.use('/auth', authRoutes);

app.get('/health', async (req, res) => {
    try {
      const result = await pool.query('SELECT NOW()');
      res.json({ status: 'ok', time: result.rows[0].now });
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: 'error', message: err.message });
    }
  });

app.use('/reviews', reviewRoutes);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});