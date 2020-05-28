var express = require('express');
var https = require("https");
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');


});

app.post('/', function(req,res){

    const userCity = req.body.cityName;

    const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + userCity.toLocaleLowerCase() + "&appid=a2f9b833a6a185886fc271b42af9257a&units=metric"

    https.get(weatherUrl, function (response) {

        
        response.on('data', function (data) {
            const weatherData = JSON.parse(data)
            const temp = Math.round(weatherData.main.temp);
            const weatherDescription = weatherData.weather[0].description
            const country = weatherData.sys.country
            const cityName = weatherData.name

            const IconCode = weatherData.weather[0].icon

            const imageURL = "http://openweathermap.org/img/wn/" + IconCode + "@2x.png"

            //res.writeHead(200, { "Content-Type": "text/html" });

            res.write("<p> The current weather is " + weatherDescription + "</p>");
            res.write("<h1>Current tempreture for <br>"  + country + ", " + cityName + " is " + temp + " degrees celsius </h1> ");
            res.write("<img src=" + imageURL+ ">");

            res.send();
            
        });

    });
        
});





app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});