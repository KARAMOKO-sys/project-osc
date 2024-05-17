//userRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.get('/user', authMiddleware, (req, res) => {
  res.send('User route');
});

module.exports = router;

