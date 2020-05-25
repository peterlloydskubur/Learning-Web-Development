var express = require('express');
var https = require("https");

var userCity = "rīga";

var app = express();

app.get('/', function (req, res) {

    app.get('/', function(req, resHTML){
        resHTML.sendFile('index.html');
    });

    const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + userCity.toLocaleLowerCase() + "&appid=a2f9b833a6a185886fc271b42af9257a&units=metric"

    https.get(weatherUrl, function (response) {

        response.on('data', function (data) {
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const country = weatherData.sys.country
            const cityName = weatherData.name
            res.send(" <h1>The current tempreture for " + country + ", " + cityName + " is " + temp + " degrees in celsius </h1> ")
        });
    });

});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});