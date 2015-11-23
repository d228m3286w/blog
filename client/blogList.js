var React = require('react');
var CommentForm = require('./blogComment');
var prettydate = require("pretty-date");

var BlogList = React.createClass({
    render: function() {
    	var self = this; 
        // window.user = comment.user
        var blogSort = this.props.data.sort(function(a, b){
          var x = a.date, y = b.date;
          return x < y ? -1 : x > y ? 1 : 0;
          });

       var blogData = blogSort.reverse().map(function(blogs){
            
            if(blogs.comments) {
                var blogComments = blogs.comments.map(function(i){
                    var commentsDate = i.date;
                    var rawDate = i.date.substring(5, 10);
                    var newDate = prettydate.format(new Date(i.date))
                    return (
                        <div>
                            <p>{i.body}    <em>:  {newDate}  {rawDate}</em></p>
                            
                        </div>
                    )
                });
            };

    		return (
    				<div>
    					<h4> {blogs.title} </h4>
    					<article> {blogs.body} <p id="peepsComments"> {blogComments} </p> </article>
                         <CommentForm blogId={blogs._id} onPost={self.props.newData}/>
    				</div>
    			)

    	});
        return (
				<div>
					<h1 id="headingToBlog">Blogs</h1>
						<ul>
							{blogData}
						</ul>
				</div>
        	);
    }
});

module.exports = BlogList;


