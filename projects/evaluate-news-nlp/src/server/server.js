var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')

const port = 8085

var https = require('follow-redirects').https;
var fs = require('fs');

const dotenv = require('dotenv');
dotenv.config();

const myApiId = process.env.API_KEY
console.log(`Your API key is ${myApiId}`);

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
}))       
  extended: true
                                  
app.use(express.static('dist'))

console.log("dirname : "+__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log('Example app listening on port '+port+'!')
})

app.get('/test', function (req, res) {
    const defaultRequest = mockAPIResponse
    res.json(defaultRequest)
})


app.get('/credentials', function (req, res) {
    res.send(myApiId)
})

