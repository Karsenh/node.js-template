//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

// TODO:

// Process.env.port for Heroku remote hosting
// 3000 for local hosting / testing
app.listen(process.env.PORT || 3000, function() {
    console.log("Successfully started server!");
});