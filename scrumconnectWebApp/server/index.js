const express = require('express');
const fetch = require('node-fetch');
const URLSearchParams = require('url');
const path = require('path'); // NEW
const { get } = require('http');
const app = express();
var bodyParser = require("body-parser");
var saveUserDataToMongo = require(path.join(__dirname+"/api/saveUserDataToMongo.js"));


const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist'); 
const HTML_FILE = path.join(DIST_DIR, 'main.html'); 







const encodeFormData = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
}



app.use(bodyParser.json());
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-type','application/javascript');
  res.set()
  next();
});
app.use(express.static(DIST_DIR));


const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};

async function getCountries(){
  const requestOptions = {
    method: 'GET'
  }
let response = await fetch("https://restcountries.eu/rest/v1/region/Europe", requestOptions);
var responseCode = response.status;
if(responseCode == 200){
let data = await response.json();
let resp = [];
for(var x of data){
  resp.push(x.name)
}
return resp;
}
else return []

}



app.get('/countries',(req,res,next) => {
  getCountries().then(resp=>res.send(resp));
})

app.post('/save',(req,res,next) => {
  console.log(req.body);
  saveUserDataToMongo.saveUserDataToMongo(req.body)
})

app.get('/', (req, res,next) => {
  res.sendFile(HTML_FILE) //http-only cookie
}
);



app.get('/')

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});
