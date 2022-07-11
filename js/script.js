function http(url){
    this.url = url;
    return {
        get: function(){
            return new Promise(function(resolve, reject){
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.onload = function(){
                    if(xhr.status === 200){
                        resolve(xhr.response);
                    }else{
                        reject(xhr.statusText);
                    }
                }
                xhr.onerror = function(){
                    reject(xhr.statusText);
                }
                xhr.send();
            });
        },
        post: function(data){
            return new Promise(function(resolve, reject){
                var xhr = new XMLHttpRequest();
                xhr.open('POST', url);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = function(){
                    if(xhr.status === 200){
                        resolve(xhr.response);
                    }else{
                        reject(xhr.statusText);
                    }
                }
                xhr.onerror = function(){
                    reject(xhr.statusText);
                }
                xhr.send(JSON.stringify(data));
            });
        }
    }
}

// create object of the Promise driven HTTP client and ensure following code works

const httpClient = new http('http://localhost:3000/contacts');


let contact = {
    // add properties as per the data structure of the data fetched and retrieved
    "firstName": "jones",
    "lastName": "christi",
    "email": "jones.c@gmail.com",
    "homeNo": "+1 890 765 3210",
    "workNo": "",
    "birthDate": "2001-16-9",
    "company": "",
    "jobTitle": "",
    "notes": "nth contact",
    "contactAddedOn": "2021-05-23T12:19:11.235Z"
  }

httpClient
.post(contact)
.then(response=>{
    alert('record added')
    console.log(response);
})
.catch(err=>{
    console.log(err);
});

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
});
module.exports = http;