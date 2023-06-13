// Server Port Configuration using .env

const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
};
