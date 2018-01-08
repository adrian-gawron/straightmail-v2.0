import _    from 'lodash';
import path from 'path';
/* eslint no-process-env: "off" */

if (_.isNil(process.env.NO_ENVFILE)) {
  const dotenv = require('dotenv');

  if (process.env.NODE_ENV === 'test') dotenv.load({ path: '.env.test' });
  dotenv.load({ path: '.env' });
}

module.exports = {
  name: 'project-name',
  logs_path: process.env.LOGS_PATH || 'logs',
  log_level: process.env.FORCE_TRACE || process.env.LOG_LEVEL || 'ERROR',
  port: process.env.AAS_SERVER_PORT,
  base_url: process.env.AAS_BASE_URL,
  api_url: `${process.env.AAS_BASE_URL}/api`,
  webpack_paths: {
    buildPath: path.resolve('_build'),
    nodeModulesPath: path.resolve('node_modules'),
    publicPath: '/'
    //dd
  }
};
