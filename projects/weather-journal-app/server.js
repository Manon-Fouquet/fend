// Setup empty JS object to act as endpoint for all routes
const projectData =[];

// Require Express to run server and routes
const express = require('express')
// Start up an instance of app
const app = express()
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors')
app.use(cors())
// Initialize the main project folder
app.use(express.static('website'));

const port = 3001

// Setup Server
const server = app.listen(port,()=>console.log(`Running on localhost ${port}`))

// For testing route
const fakeWeatherData = {
        temp    :12.1,
        date    :"2020-10-22 06:00:00"
        };

function sendFakeWeatherData(req,res){
    res.send(fakeWeatherData);
}
        
app.get('/getFakeWeatherData',sendFakeWeatherData)

app.get('/all',(req,res)=>{res.send(projectData);})

/*
    This retrieves weather data completed with user info and save it to projectData
*/
app.post('/getCompletedWeatherData', (request, response)=>{
    let postedData = request.body;
    console.log("[INFO] On server side, postedData : ",postedData);
    let newEntry = {
        temp        :postedData.temp,
        date        :postedData.date,
        userComment :postedData.userComment,
        };  
    const nTot = projectData.push(newEntry);
    response.send({msg:"Post data well registered",nData:nTot})
    })
    