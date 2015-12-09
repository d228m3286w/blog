var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
require('dotenv').load();

var url2 = "https://wakatime.com/api/v1/users/current/stats/all_time/?api_key=" + process.env.WAKA_KEY;

fetchWakaEvents = function(req,res) {

	wakaStuff = [];

	populateWaka = function(w) {
		wakaStuff.push(w)
		
	}
	axios.get(url2)
  		.then(function (response) {
  			if(response){
  				populateWaka(response);
  			}
  			var wakaMap = wakaStuff.map(function(a){
  				return {"daily": a.data.data.daily_average,
  						"languages": a.data.data.languages}

  			})
  			res.json(wakaMap);
	  })
  		.catch(function (response) {
    	console.log(response);
  		});
  	
};

module.exports = fetchWakaEvents;