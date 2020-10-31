var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const port = 8085

var https = require('follow-redirects').https;
var fs = require('fs');

const dotenv = require('dotenv');
dotenv.config();

const myApiId = process.env.API_KEY
console.log(`Your API key is ${myApiId}`);

// Options from the meaning cloud API
var options = {
    'method': 'POST',
    'hostname': 'api.meaningcloud.com',
    'path': '/sentiment-2.1?key='+myApiId+'&lang=<lang>&txt=<text>&model=<model>',
    'headers': {
    },
    'maxRedirects': 20
};


const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log('Example app listening on port '+port+'!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


// see https://www.meaningcloud.com/developer/sentiment-analysis/dev-tools
var req = https.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });

    res.on("error", function (error) {
      console.error(error);
    });
});

  req.end();