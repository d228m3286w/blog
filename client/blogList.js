var React = require('react');

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
					<h1 id="headingToBlog">Blogs</h1>
						<ul>
							{blogdata}
						</ul>
				</div>
        	);
    }
});

module.exports = BlogList;

















