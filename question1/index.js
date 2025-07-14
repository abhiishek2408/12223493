
import express from 'express';
import mongoose from 'mongoose';
import loggingMiddleware from './middleware/logger.js';
import urlRoutes from './routes/urlRoutes.js';
import fs from 'fs';
import path from 'path';


const logsDir = path.join(path.resolve(), 'logs');
if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir);

const app = express();
app.use(loggingMiddleware); 
app.use(express.json());
app.use('/', urlRoutes);


mongoose.connect('mongodb://localhost:27017/myTestDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected successfully');
    app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
  })
  .catch(err => console.log(err));



