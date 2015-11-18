var React = require('react');
var BlogList = require('./blogList')

var BlogBox = React.createClass({

	getInitialState: function(){
			return {data: []}
	},

	loadBlogsFromServer: function() {
		
		$.ajax({
			url: this.props.url,
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
		this.loadBlogsFromServer();
	},
    render: function() {
        return (
				<div>
					<ul>
						<BlogList data={this.state.data}/>
					</ul>
				</div>
        );
    }
});


module.exports = BlogBox;
