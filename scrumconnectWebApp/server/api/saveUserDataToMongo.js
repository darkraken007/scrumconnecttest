const fetch = require('node-fetch');


async function saveUserDataToMongo(data){

    var returnVal="";
    var userdata = {
        "name":data.name,
        "country":data.country,
        "age":data.age,
        "sex":data.sex
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                   'accept': 'application/json'
                 },
        body: JSON.stringify(userdata)
    }
    var url="http://localhost:8102/create"
     var response = await fetch(url, requestOptions)
     var jsonresp = await response.json();
     console.log(jsonresp)
     return jsonresp
}

exports.saveUserDataToMongo = saveUserDataToMongo