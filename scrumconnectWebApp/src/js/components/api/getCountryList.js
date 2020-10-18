


function getCountryList(responseHandler){

    var returnVal="";
    const requestOptions = {
        method: 'GET'
    };
    var url=window.location.protocol+"//"+window.location.hostname+":"+window.location.port+"/countries"
     fetch(url, requestOptions)
     .then(response => response.json())
     .then(data => responseHandler(data))
     .catch(err => responseHandler(["Failed to fetch"])); 
    // var data = {"status":200,"requestId":121212}
    // responseHandler(data)
}

export default getCountryList