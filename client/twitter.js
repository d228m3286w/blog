var React = require('react');

var TweetList = React.createClass({

    render: function() {
    	var tweetdata = this.props.data.map(function(tweet){
    		return <li> {tweet.text} </li>
    	})
        return (
				<div>
					{tweetdata}
				</div>
        );
    }
});

var TweetBox = React.createClass({

		getInitialState: function(){
			return {data: []}
		},



	loadTweetsFromServer: function() {
		var handle ="d228m3286w";
		var url ="/api/T/handle/";
		$.ajax({
			url: url + handle,
			dataType: 'json',
			cache:false,
			success:function(data){
				console.log("inside success")
				this.setState({data:data});
			}.bind(this),
			error: function(xhr,status, err){
				console.log("broken url is " + this.props.url)
				console.error(this.props.url, status,err.toString());
			}.bind(this)
		});
	},

	
componentDidMount: function() {
	this.loadTweetsFromServer();
},


    render: function() {
        return (
				<div>
					<ul>
						<TweetList data={this.state.data}/>
					</ul>
				</div>
        );
    }
});

module.exports = TweetBox;
