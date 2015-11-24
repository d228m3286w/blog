var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
require('dotenv').load();

var url2 = "https://wakatime.com/api/v1/users/current/stats/last_7_days/?api_key=" + process.env.WAKA_KEY;

fetchWakaEvents = function(req,res) {
	axios.get(url2)
  		.then(function (response) {
  		
  			res.json(response);
	  })
  		.catch(function (response) {
    	console.log(response);
  		})
  	
};

module.exports = fetchWakaEvents;