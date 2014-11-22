var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/static'));

app.use(bodyParser.json());

// Your JSON API here

app.get('/api/yolo', function (req, res) {
    res.send('YOLO!')
});

var port = process.env.PORT || 3141;
app.listen(port, function (error) {
    if (error) throw error;
    console.log('Server listening on port ' + port);
});
