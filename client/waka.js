var React = require('react');

var WakaList = React.createClass({

    render: function() {
    	var wakadata = this.props.data.map(function(waka){
    		return <li> {waka._id} </li>
    	})
        return (
				<div>
					{wakadata}
				</div>
        );
    }
});

var WakaBox = React.createClass({

		getInitialState: function(){
			return {data: []}
		},


	loadWakasFromServer: function() {
		urll = 
		
		$.ajax({
			url: urll,
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
        return (
				<div>
					<ul>
						<WakaList data={this.state.data}/>
						<p>Waka</p>
					</ul>
				</div>
        );
    }
});

module.exports = WakaBox;
