const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(7070, () => {
  console.log('server is up!');
});

app.get('/data', function(request, response) {
  request.send({ message: 'Hello, world' });
});
