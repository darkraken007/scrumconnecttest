


function saveUserData(data){

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
    var url=window.location.protocol+"//"+window.location.hostname+":"+window.location.port+"/save"
     fetch(url, requestOptions)
     .then(response => response.json())
     .then(jsonresp => console.log(jsonresp))
}

export default saveUserData