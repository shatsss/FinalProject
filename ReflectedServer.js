var express = require('express');
var app = express();
var path = require('path');
var url = require("url");
fs = require('fs');
// view engine setup
var filePath = __dirname + '/public/data.txt';
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

app.get('/search', function (req, res) {
    var keyword = req.param('keyword');
    res.send("tagId is set to " + req.param("keyword"));
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

});