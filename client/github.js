var React = require('react');

var Github = React.createClass({
	
	getInitialState: function(){
			return {data: []}
	},

	loadGitsFromServer: function() {
		var url = "/api/github";
		$.ajax({
			url: url,
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
		this.loadGitsFromServer();
	},

    render: function() {
    	var gitshit = this.state.data.map(function(c){
    		if(c.coms){
	    		var commitsInfo = c.coms.map(function(g){
	    			return (
	    				<div>
	    					<li><a href={g.url}> {c.repo}</a></li>
	    					<li>{g.message}</li>	    					
	    				</div>
	    			)

	    		})
	    		return(
	    			{commitsInfo}
	    			)
	    		}
		
    	});

        return (
			<div>
				{gitshit}

			</div>
        );
    }
});

module.exports = Github;



