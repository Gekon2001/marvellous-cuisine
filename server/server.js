import express from 'express';
import bodyParser from 'body-parser';
import controllers from './controllers/controllers';

import config from './config';

import mongoose from 'mongoose';

mongoose.connect(config.mongoURL);

const app = express();

app.use(express.static('public'));

app.use(bodyParser.json({}));

controllers(app);

app.listen(3000, () => {
  console.log('server is up!');
});

app.get('/data', function(request, response) {
  response.send({ message: 'Hello, world' });
});

process.on('exit', function() {
  mongoose.connection.close(function() {
    console.log('Connection to DB is closed.')
  });
});
