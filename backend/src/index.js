import Server from './server/index';
import { SERVER_METHODS } from './server/utils';

const server = new Server();

server.addApiRoute(SERVER_METHODS.GET, '/api/v1/test', (req, res)=> {
  return res.send('test working');
});

server.start();
