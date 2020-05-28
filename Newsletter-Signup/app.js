var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express()

app.use(bodyParser.urlencoded({ extended: false }))


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});