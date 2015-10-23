
// $.getJSON( "/api/blog", function( data ) {
//   var items = [];
//   $.each( data, function( key, val ) {
//   	items.push( "<article id='first-blog' class='col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1'><h5 class='blog-headlines'>" + val.title + "</h5>" + val.body + "</article>" );
//   });
//   $( "<div/>", {
//     "class": "my-new-list",
//     html: items.join( "" )
//   }).appendTo( "#blog-list" );
// });
// });


var BlogList = React.createClass({

    render: function() {

    	var blogdata = this.props.data.map(function(blogs){
    		return (
    				<div>
    					<h4> {blogs.title} </h4>
    					<article> {blogs.body} </article>
    				</div>
    			)

    	});
        return (
				<div>
					<h1>Blogs</h1>
						<ul>
							{blogdata}
						</ul>
				</div>
        	);
    }
});





var BlogBox = React.createClass({

		getInitialState: function(){
			return {data: []}
		},



	loadTweetsFromServer: function() {
		
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
	this.loadTweetsFromServer();
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

React.render(<BlogBox url="/api/blog/"/>, document.getElementById('blog-list'));

















