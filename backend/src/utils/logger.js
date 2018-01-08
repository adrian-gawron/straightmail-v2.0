import config       from 'config';
import bunyan       from 'bunyan';
import PrettyStream from 'bunyan-prettystream';

const prettyStdOut = new PrettyStream();
prettyStdOut.pipe(process.stdout);

const { name, log_level, env, logs_path } = config;

const LOGS_FILE_NAME = `${logs_path}/${name}-${env}.log`;
const ERR_LOGS_FILE_NAME = `${logs_path}/${name}-err-${env}.log`;

const bunyanConfig = {
  name,
  level: log_level,
  streams: [{
    stream: prettyStdOut,
    level: log_level
  }, {
    path: LOGS_FILE_NAME,
    level: log_level
  }, {
    path: ERR_LOGS_FILE_NAME,
    level: 'error'
  }]
};

const logger = bunyan.createLogger(bunyanConfig);
export default logger;
