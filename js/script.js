// create object that returns Promise with the response for the request made



// create object of the Promise driven HTTP client and ensure following code works

let contact = {
    // add properties as per the data structure of the data fetched and retrieved
  }

httpClient
.post(record)
.then(response=>{
    alert('record added')
    console.log(response);
})
.catch(err=>{

    console.log(err);
})



httpClient
.get()
.then((response)=>{
    let data = '<ul>'
    let records = JSON.parse(response);
    records.forEach(r => {
        data+= `<li>${r.firstName}.${r.lastName}</li>`
    })
    data+='</ul>'
    document.body.innerHTML += data;
    console.log(response);
})
.catch(err=>{
    document.write(response);
    console.log(err)
})

