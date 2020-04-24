const express = require('express');
require('dotenv').config();

var app = express();
app.get('/', function (req, res) {
  res.send('Something');//process.env.env_name);
});
app.get('/helo', function (req, res) {
  res.send((process.env.env_name|| 'Not Set'));
});
// const port = 3000;
app.listen(5050, function () {
  console.log('Example app listening on port 3000!');
});
