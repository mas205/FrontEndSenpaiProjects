const express = require('express');
var app = express();
require('./router/main.js')(app);

app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs');
app.use('/css', express.static(__dirname + '/public/styles'));
//app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/jquery', express.static(__dirname + '/jquery'));
app.engine('html', require('ejs').renderFile);

app.listen(3000, function () {
  console.log('Don\'t even bother');
});