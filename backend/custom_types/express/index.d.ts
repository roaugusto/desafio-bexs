declare namespace Express {
  interface Request {
    io: SocketIO.Server;
  }
}
