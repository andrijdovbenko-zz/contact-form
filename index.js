const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const myPassword = require('./password');

const http = require('http');

const server = http.createServer(app).listen(3001, "127.0.0.1", function() {
    const host = server.address().address
    const port = server.address().port
    
    console.log(`Example app listening at http://${host}:${port}`);
});

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'html');
app.use(express.static(__dirname + '/client'));

app.get('/', function (req, res) {
    res.sendFile('index.html', {root : __dirname });
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'andrijdovbenko@gmail.com',
        pass: myPassword
    }
});

app.post('/submit', (req, res) => {
    var mailOptions = {
        from: req.body.email,
        to: 'andrijdovbenko@gmail.com',
        subject: 'Sending Email using Node.js',
        text: `You get email from ${req.body.name}. Email: ${req.body.email}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent: ' + info.response);
        }
    });
});