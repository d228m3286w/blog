var React = require('react');
// var WakaGraph = require('./wakaGraph');

var WakaBox = React.createClass({

		getInitialState: function(){
			return {data: []}
		},


	loadWakasFromServer: function() {
		
		
		$.ajax({
			url: "/api/Waka",
			dataType: 'json',
			cache:false,
			success:function(data){
				console.log("waka success")
				this.setState({data:data});
			}.bind(this),
			error: function(xhr,status, err){
				console.log("broken waka is " + this.props.url)
				console.error(this.props.url, status,err.toString());
			}.bind(this)
		});
	},

	
componentDidMount: function() {
	this.loadWakasFromServer();
},


    render: function() {
    	var wakaData = this.state.data.map(function(w){
    		var dailyAverage = Math.ceil(w.daily /(60)/60);
    
    		var languages = w.languages.map(function(j){
    			var langName = j.name;
    			var timeLang = Math.ceil(j.total_seconds /(60)/60);	
    		
    			return (
    				<div>
    					<li>{langName} rounded to the nearest hour {timeLang}</li>
    				
    				</div>
    				)
    		});
    		 return (
    		 	<div>

    				{languages}
    			</div>
    			)

    		
    	})
    	return (
    			<div>
					<p>{wakaData}</p>
                    
				</div>
    		)
    	 

}
});

module.exports = WakaBox;

// <li>Daily Average hours spents coding {dailyAverage}</li>




