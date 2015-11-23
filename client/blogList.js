var React = require('react');
var CommentForm = require('./blogComment');
var prettydate = require("pretty-date");

var BlogList = React.createClass({
    render: function() {
    	var blogdata = this.props.data.map(function(blogs){
            if(blogs.comments) {
                var blogComments = blogs.comments.map(function(i){
                    var newDate = prettydate.format(new Date(i.date))
                    return (
                        <div>
                            <p>{i.body}</p>
                            <p>{newDate}</p>
                        </div>
                    )
                });
            };

    		return (
    				<div>
    					<h4> {blogs.title} </h4>
    					<article> {blogs.body} <p id="peepsComments"> {blogComments} </p> </article>
                         <CommentForm blogId={blogs._id}/>
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



// var commentsDate = i.date;
// var rawDate = i.date.substring(0, 10);

