

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    formText = Client.checkNonEmpty(formText)

    
    // Production mode: we fetch the user API key and it's retrieved from the .env file
    // Then we call the meaningcloud API with the API key and text input by the user
    // Finally we display the restult message on the assessement of the text
    
    const baseURL = 'http://api.meaningcloud.com/sentiment-2.1?key='
    
    console.log("::: Running handleSubmit :::");
    const res=
        fetch('http://localhost:8085/credentials')      
        .then(data => data.text())
        .then(cred =>{console.log("cred : "+ cred);
                        let url= baseURL+cred+'&lang=auto&txt='+formText;
                        console.log("URL : "+url);
                        const res = fetch(url)
                            .then(res => res.json())
                            .then(res=> {
                                console.log('Received data '+JSON.stringify(res));         
                                document.getElementById('result-message').innerHTML = "The text is "+res.subjectivity.toLowerCase()+", "+res.irony.toLowerCase()+" and expresses "+res.agreement.toLowerCase()+"."     ;
                                })
                    }
             ) 
            
}


// I disabled this function because of error regeneratorRuntime is not defined
// async function getCredentials(){
    // const res = await fetch('http://localhost:8085/credentials')
        // .then(res=>res.json())
        // .then((res)=>{console.log('Received appID = '+res.apiID); return res.apiID});
    // return res;
// }


export { handleSubmit }
