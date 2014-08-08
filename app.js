var express = require('express');
var logfmt = require('logfmt');
var app = express();
app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
    res.send('hello');
});
app.use(function(err, req, res, next){ if (req.xhr) { res.send(500, 'Something went wrong!'); } else { next(err); } });

console.log('starting');
app.listen(8080);
console.log('listening on 8080');