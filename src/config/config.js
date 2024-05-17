require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  dbUri: process.env.MONGO_DB_URL,
  jwtSecret: process.env.JWT_SECRET,
};
