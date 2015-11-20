var React = require('react');

var BlogForm = React.createClass({

	handleSubmit: function(e) {

		e.preventDefault();

			var title = React.findDOMNode(this.refs.title).value.trim();
			var body = React.findDOMNode(this.refs.body).value.trim();
			
			if(!title){
				return;
			}
			var data = ({title: title, body: body});

			$.ajax({
				url: this.props.url,
				dataType: 'json',
				data: data,
				type: 'POST',
					success:function(response){
					console.log("Posting data", data, response)
					document.location='/blog.html'
					}.bind(this),
					error: function(xhr,status, err){
						console.log("NOT POSTING DATA")
						console.log(data)
						console.error(this.props.url, status, err.toString());
					}.bind(this)
			})
	},
		
    render: function() {
        return (
				<div>
					<form method="POST">
						<h1 id="formHead">POST YOUR BLOG FOO!!!</h1>
    					
						<input type="text" ref="title" className="form-control" id="upper" placeholder="Input field"/>
						<textarea type="text" ref="body" className="form-control" id="downer" placeholder="Blog Entry"/>
						<button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
        );
    }
});
React.render(<BlogForm url="/api/blog/"/>, document.getElementById('BlogFoo'));












