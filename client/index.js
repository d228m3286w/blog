var React = require('react');
var Github = require('./github');
var TweetBox = require('./twitter');
var WakaBox = require('./waka');


React.render(<Github/>, document.getElementById('github'));
React.render(<TweetBox/>, document.getElementById('twit'));
React.render(<WakaBox/>, document.getElementById('wakawaka'));