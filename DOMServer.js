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
  //  res.setEncoding('utf8');
    //res.enctype="text/plain";
    res.charset = "utf8";
    var keyword = req.param('keyword');
    console.log(keyword);
    var response = "<b>Hello from my http server!!</b>";
    response += "<p>You searched for: <em></em>" + "</p>";
    response += "<script> var keyword=location.search.substring(6);document.querySelector('em').innerHTML.enctype = 'text/plain';document.querySelector('em').innerHTML=keyword;</script>";
    res.writeHead(200, {"Content-Type": "text/html" });
    res.end(response);
});

var server = app.listen(4000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

});