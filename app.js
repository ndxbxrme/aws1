var gzippo = require('gzippo');
var express = require('express');
var logfmt = require('logfmt');
var app = express();
app.use(logfmt.requestLogger());
app.use('/scripts', gzippo.staticGzip('' + __dirname + '/dist/scripts'));
app.use('/images', gzippo.staticGzip('' + __dirname + '/dist/images'));
app.use('/styles', gzippo.staticGzip('' + __dirname + '/dist/styles'));
app.use('/views', gzippo.staticGzip('' + __dirname + '/dist/views'));
app.all('/*', function(req, res, next) {
    res.sendfile('index.html', {root: __dirname + '/dist'});
});
app.listen(process.env.PORT || 8080);