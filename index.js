const express = require('express');
const app = express();

const http = require('http');

const server = http.createServer(app).listen(3001, "127.0.0.1", function() {
    var host = server.address().address
    var port = server.address().port
    
    console.log(`Example app listening at http://${host}:${port}`);
});

app.use(express.static(__dirname + '/client'));

app.get('/', function (req, res) {
    res.sendFile('index.html', {root : __dirname });
});

