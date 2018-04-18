// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',
  port: 3001,
  mongoUri: "mongodb://test:test@ds133496.mlab.com:33496/cleaningschedule" || '',
  mongooseDebug: process.env.MONGOOSE_DEBUG || true,
};

module.exports = config;
