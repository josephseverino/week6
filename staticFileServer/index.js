var express = require('express');
var fs = require('fs');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
	fs.readFile('data.txt', function(err, contents) {
        res.header('Content-Type', 'text/html');
        res.send(contents);
    });
});



app.listen(process.env.PORT || 3000, function() {
	console.log('Server is running');
});