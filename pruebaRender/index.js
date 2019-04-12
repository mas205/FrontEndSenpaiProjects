const express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile('index.html', {root : __dirname + '/views'});
});

app.listen(3000, function () {
  console.log('Don\'t even bother');
});