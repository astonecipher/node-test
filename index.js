const express = require('express');
require('dotenv').config();

var app = express();
app.get('/', function (req, res) {
  res.send('Something');//process.env.env_name);
});
// const port = 3000;
app.listen(5000, function () {
  console.log('Example app listening on port 3000!');
});
