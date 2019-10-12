
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import { Server } from 'http';
import mongoose from 'mongoose';
import path from 'path';
import todo from './controller/todo/todo.controller';
import bucket from './controller/bucket/bucket.controller';
import expressValidator from 'express-validator';

dotenv.config();

let app = express();
let server = Server(app);
app.use(bodyParser.json({ limit: '10mb' }));

// app.use(bodyParser.urlencoded({
//   limit: '40mb',
//   extended: true
// }));
app.use(express.urlencoded());

// app.use(expressValidator())

// configure our app to handle CORS requests
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Disposition, Content-Description, Content-Range, Authorization, X-Requested-With, Cache-Control, Accept, Origin, X-Session-ID');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/api/todo', todo);
app.use('/api/bucket', bucket);


mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true,
  useNewUrlParser: true, })
  .then(() => console.log('Succeeded connected to: ' + process.env.MONGO_URI))
  .catch(error => console.log('ERROR connecting to: ' + process.env.MONGO_URI + '. ' + error));

server.listen(process.env.PORT || 8080, function () {
  console.log('Express server listening on port ' + (process.env.PORT || 8080) + ' in ' + process.env.NODE_ENV);
});

module.exports = app;
