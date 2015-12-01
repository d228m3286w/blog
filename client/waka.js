var React = require('react');
var Chart = require('chart.js');
// var App = require('./wakaGraph');

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
            var allLangs = [];
            var allTime = [];
    		var languages = w.languages.map(function(j){
    			var langName = j.name;
                allLangs.push(langName);
    			var timeLang = Math.ceil(j.total_seconds /(60)/60);
                allTime.push(timeLang);
    		
    			return (
    				<div>
    					<li>{langName} rounded to the nearest hour {timeLang}</li>
                        <App labels={allLangs} tData={allTime}/>
    				
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
})
var App = React.createClass({
    render: function() {
        console.log(this.props.tData)
      var data = {
    labels: this.props.labels,
    datasets: [
      
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: this.props.tData
        }
    ]
};
      var ctx = document.getElementById("myChart").getContext("2d");
      var myRadarChart = new Chart(ctx).Radar(data);
        return (
        <div>
          
          
        </div>
        );
    }
});

module.exports = WakaBox;

// <li>Daily Average hours spents coding {dailyAverage}</li>
// <App languages={this.langName} timeLang={this.timeLang} />



