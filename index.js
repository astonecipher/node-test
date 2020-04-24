const express = require('express');
require('dotenv').config();

var app = express();
app.get('/', function (req, res) {
  res.send(process.env.env_name);
});
app.listen(80, function () {
  console.log('Example app listening on port 3000!');
});
