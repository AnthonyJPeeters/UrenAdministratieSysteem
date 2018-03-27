// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI || '',
  mongooseDebug: process.env.MONGOOSE_DEBUG || true,
};

module.exports = config;
