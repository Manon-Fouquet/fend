var path = require('path')
const express = require('express')
// To be able to fetch external API from server side
const fetch = require('node-fetch');
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
app.options('*', cors()) 

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


app.post('/analyse', async function (req, res) {
    
    // Production mode: The user API key is retrieved from the .env file
    // Then we call the meaningcloud API with the API key and text input by the user
    // Finally we send the  process restult to the client side
    
    const url = getURL(req.body.formText)
    try{
        let response = await fetch(url)
        let data = await response.json()
        const toReturn ={}
        toReturn.subjectivity   = data.subjectivity    
        toReturn.irony          = data.irony    
        toReturn.agreement      = data.agreement    
        toReturn.confidence     = data.confidence 
        console.log("SERVER: returned result = "+toReturn.subjectivity)
        res.send(toReturn)
    }catch(error){   
        console.log("Could not fetch url "+url);
    }
})



function getURL(userText){
    const url = 'http://api.meaningcloud.com/sentiment-2.1?key='+myApiId+'&lang=auto&txt='+userText;
    console.log("SERVER: returned result = "+url)
    return  url
}