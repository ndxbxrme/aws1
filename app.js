var express = require('express');
var logfmt = require('logfmt');
var app = express();
app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
    res.send('hello');
});

app.listen(8080);