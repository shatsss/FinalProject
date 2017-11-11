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

app.get('/', function (req, res) {

    res.sendFile(__dirname + "/write.html");
    //  res.send('Hello World');
});
app.post('/write', function (req, res) {

    var body = '';

    req.on('data', function (data) {
        body += data;
        console.log(body);
        //  res.render('index.jade', { title: body });
        fs.appendFile(filePath, body + "\r\n", function () {
        });
        fs.readFile(filePath, "utf8", function (err, data) {
            if (err) throw err;
            //do operation on data that generates say r esultArray;
            console.log(data);
            var splitArr = data.split("\r\n");
            //
            var response = "<b>Hello from my http server!!</b>";
            response += "<p>Total awesome: " + "</p>";
            response += "<p>Total cool: " +  "</p>";
            response += "<ul>";
            for (var i = 0; i < splitArr.length; i++){
                response += "<li> " + splitArr[i]+ "</li>"
            }
            response += "</ul>";
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(response);
            //
         //   res.sendFile('BlogHtml.html', {root: __dirname })

            //res.send(data);
//            return resultArray;
        });
    });
});
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

});