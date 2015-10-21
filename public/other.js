

var TwitterList = React.createClass({

    render: function() {

    	var tweetdata = this.props.data.map(function(tweet){
    		console.log("tweet")
    		return (
    				<div>
    					<h4> {tweet} </h4>
    					
    				</div>
    			)

    	});
        return (
				<div>
					<h1>Twitter</h1>
						<ul>
							{tweetdata}
						</ul>
				</div>
        	);
    }
});





var TwitterFeed = React.createClass({

		getInitialState: function(){
			return {data: []}
		},



	loadTweetsFromServer: function() {
		var handle="d228m3286w"
		$.ajax({
			url: this.props.url + handle,
			dataType: 'json',
			cache:false,
			success:function(data){
				console.log("inside success" + JSON.stringify(data[0]))
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
						<TwitterList data={this.state.data}/>
					</ul>
				</div>
        );
    }
});

React.render(<TwitterFeed url="/api/T/:twitterHandle"/>, document.getElementById('twitter-feed'));






