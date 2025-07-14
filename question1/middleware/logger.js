import fs from 'fs';
import path from 'path';

const loggingMiddleware = (req, res, next) => {
  const log = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl}\n`;
  const logFilePath = path.join(path.resolve(), 'logs', 'access.log');

  fs.appendFile(logFilePath, log, (err) => {
    if (err) {
    }
  });

  req.customLog = log;
  next();
};

export default loggingMiddleware;
