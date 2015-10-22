

var http = require('http');
var fs = require('fs');
var mongoose   = require('mongoose');
var db = require('./models/db');
var Blog = require('./models/blog');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');



// var router = express.Router();


var blogRoutes = require('./routes/blog');



require('dotenv').load();
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();
var Twit = require('twit');
var axios = require('axios');
var _ = require('lodash');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.options("*", function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
});




var T = new Twit({
  consumer_key: process.env.CONSUMER_KEY, 
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_SECRET
});


var fetchTweets = function(req, res){
  var twitterHandle = req.params.twitterHandle;

  T.get('statuses/user_timeline', { screen_name: twitterHandle, count: 10 },
    function(err, data, response) {

      // var justTweets = [];

      // data.forEach(function(obj){
      //   justTweets.push(obj.text);
      // });
      res.send(data);
    });
}

var showSlug = function(req, res){
  var twitterHandle = req.params.twitterHandle;
  
  T.get('users/suggestions/:slug', { slug: 'funny' }, function (err, data, response) {
    var slug = [];
    var toArr = data.users;
    toArr.forEach(function(obj){
        slug.push(obj.name);
      });

    res.send(slug);
    });
}


app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/api/T/:twitterHandle', fetchTweets);
app.use('/api/slugs/:twitterHandle', showSlug);
app.use('/api/blog/', blogRoutes);





app.get('/', function(req, res){
    res.sendFile('index.html');
})


app.get('/', function(req, res){
    res.sendFile('blog.html');
})

app.set('port', process.env.PORT || 4000);


////////////////Require for Passport//////////////////////

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
 // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); 

require('./routes/userRoutes')(app, passport);




var server = app.listen(app.get('port'), function(){ 
  console.log('Express server listening on port ' + server.address().port)
});











