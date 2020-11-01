/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/forecast?units=metric'
let apiID = 'e002751f67a4c24c01b41e50de9df015'


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate()+' / '+ (d.getMonth()+1)+' / '+ d.getFullYear();

const postData = async (url='', data={}) =>
    {
    const postRequest = {
        method:'POST',
        credentials:'same-origin',
        headers:
            {
            'Content-Type':'application/json',
            },
        body: JSON.stringify(data),
    };
    console.log("[INFO] prepared post request ",postRequest);
    const response = await fetch(url,postRequest);
        // Add try/catch(error)
        try{
            const responseData = await response.json();
            console.log("[INFO] Server responded to "+url+" with msg: ",responseData.msg);
            const nItems = responseData.nData;
            console.log("[INFO] "+nItems+" item(s) stored on server. ");
            return nItems;
        }catch(error){
            console.log("Error ",error);
            return -1;
        }
    };

const testDefault = async()=>{
    const res = await fetch('/getFakeWeatherData');
    try{
        const data = await res.json();
        console.log("[INFO] ",data);
    }catch(error){
        console.log("[ERROR] ",error);
    }       
}
                    
 // Async GET
const retrieveData = async (url='') =>{ 
  const request = await fetch(url);
  try {
  // Transform into JSON
    const allData = await request.json()
    console.log("[INFO] Data received from retrieveData('"+url+"') = "+allData)
    let nItems = allData.length;
    fillWeather(allData[nItems-1].date,allData[nItems-1].temp,allData[nItems-1].userComment);

  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};                   
    
function getOpenWeatherDataURL(country,city){
    
    return baseURL+'&q='+city+','+country+'&appid='+apiID;
}
/*
    Fetch the open weather data API to get today's temperature
    Once result is obtain, add the user comment to the data 
    and post it back to the server
*/
const getWeatherData = async()=>
    {
    const country = document.getElementById('country-code').value;
    const city = document.getElementById('city-name').value;   
    const feelings = document.getElementById('feelings').value;

    // Creating the URL for OpenWeatherData and fetching the result
    const weatherURL = getOpenWeatherDataURL(country,city);
    const weatherData = await fetch(weatherURL);

    try{
        // Getting weather data from OpenWeatherData
        let allWeatherData = await weatherData.json()
        
            // Prepare data to post
            console.log("[INFO] Data retrieved from OpenWeatherData : ", allWeatherData);
            newData = {
                temp        : allWeatherData['list'][0]['main']['temp'],
                date        : newDate,
                userComment : feelings,
            }
            console.log("[INFO] Filtered data in getWeatherData : ", newData);
            const nItems = postData('/getCompletedWeatherData', newData).then(()=>{
                const completedData =  retrieveData('/all');})

    }catch(error){
        console.log("[ERROR] ",error);   
    }
        
    }


/*
    Fill the 3 fields at the bottom of the page
*/
function fillWeather(date,temp,content){
    document.getElementById('date').innerHTML =     "Date           = "+date;
    document.getElementById('temp').innerHTML =     "Temperature    = "+temp+" degC";
    document.getElementById('content').innerHTML =  "Feelings       = "+content;
}


const buttonToClick = document.getElementById("generate");     
buttonToClick.addEventListener('click', getWeatherData)


