

var http = require('http');
var fs = require('fs');
var mongoose   = require('mongoose');
var db = require('./models/db');
var Blog = require('./models/blog');

var blogRoutes = require('./routes/blog');
require('dotenv').load();
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();
var axios = require('axios');
var _ = require('lodash');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/', express.static(path.join(__dirname, 'public')));


app.use('/api/blog/', blogRoutes);



// app.get('/', function(req, res){
//     res.sendFile('index.html');
// })


app.get('/', function(req, res){
    res.sendFile('blog.html');
})

app.set('port', process.env.PORT || 4000);

var server = app.listen(app.get('port'), function(){ 
  console.log('Express server listening on port ' + server.address().port)
});











