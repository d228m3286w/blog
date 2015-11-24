var React = require('react');
var CommentForm = require('./blogComment');
var prettydate = require("pretty-date");
var md5 = require('md5');
var GRAVATAR_URL = 'http://gravatar.com/avatar'
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
                        if(i.user){
                    var user = i.user.local.email;
                    var size = 15;
                    var hash = md5(user);
                    var pic = GRAVATAR_URL + "/" + hash + "?=" +size; 
                } else { var user = "the dread pirate roberts"}
                    return (
                        <div>
                            <p><img id="grTar"src={pic}/>  {i.body}    <em>:  {newDate} / {rawDate}   by:  {user}</em></p>
                            
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


