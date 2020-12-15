import express from 'express';
import helmet from 'helmet';
import cors from './app/middlewares/cors';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares()
    this.routes()
  }
  
  middlewares() {
    this.server.use(helmet());
    this.server.use(express.json());
    this.server.use(cors);
  }

  routes() {
    this.server.use(routes)
  }
}

export default new App().server;