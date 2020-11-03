function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    // If test or empty, reset with default text
    let inputElement = document.getElementById('name')
    let formText = inputElement.value
    formText = Client.checkNonEmpty(formText)
    inputElement.value = formText
    
   
    document.getElementById('result-message').innerHTML = ""
    // console.log("::: Running handleSubmit with text "+formText+":::");
    return retrieveData(formText)             
}

function retrieveData(userText){
    const res=fetch('http://localhost:8085/analyse', 
    {
        credentials: 'same-origin',
        method: 'POST',
        headers: 
        {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({formText: userText})
    })
      .then(res => res.json())
      .then(res=> 
      {
        console.log('Received data '+JSON.stringify(res));         
         document.getElementById('result-message').innerHTML =buildMessage(res)
      })  
}

function buildMessage(data){
   return "The text is "+data.subjectivity.toLowerCase()+", "+data.irony.toLowerCase()+" and expresses "+data.agreement.toLowerCase()+".";
    }
    

export { handleSubmit,retrieveData,buildMessage }