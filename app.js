//import modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/index');

var app = express();

//Template engine
app.set('view engine', 'ejs');

//Static Files
app.use(express.static('./public'));

//serve routes
routes(app);

//set port
app.listen(3000,(console.log('Listening on port 3000')));
