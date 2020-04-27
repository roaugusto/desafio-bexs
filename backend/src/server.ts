import 'reflect-metadata';

import express from 'express';
import { createServer } from 'http';
import socketIo from 'socket.io';
import cors from 'cors';

import routes from './routes';

import createConnection from './database';

const startServer = async (): Promise<void> => {
  const app = express();

  // const server = require('http').Server(app);
  // const io = require('socket.io')(server);

  const server = createServer(app);
  const io = socketIo(server);

  app.use((req, res, next) => {
    req.io = io;
    return next();
  });

  await createConnection();
  app.use(cors());
  app.use(express.json());
  app.use(routes);

  server.listen(3333, () => {
    console.log('🚀 Server started on port 3333!');
  });
};

startServer();
