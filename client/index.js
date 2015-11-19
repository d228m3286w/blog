var React = require('react');
var Github = require('./github');
var TweetBox = require('./twitter');



React.render(<Github/>, document.getElementById('github'));
React.render(<TweetBox/>, document.getElementById('twit'));