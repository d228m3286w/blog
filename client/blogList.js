var React = require('react');

var BlogList = React.createClass({

    handleCommentSubmit: function(e) {
    e.preventDefault();
    console.log(blogId)
        var body = React.findDOMNode(this.refs.body).value.trim();

            var data = ({body: body});
           
            $.ajax({
                url: "/api/blog/" + this.props.blogId + "/comment",
                dataType: 'json',
                data: data,
                type: 'POST',
                    success:function(response){
                    console.log("Posting comments", data, response)
                    }.bind(this),
                    error: function(xhr,status, err){
                        console.log("NOT POSTING DATA")
                        console.log(data)
                        console.error(this.props.url, status, err.toString());
                    }.bind(this)
            })
    },

    render: function() {
        var self = this;
    	var blogdata = this.props.data.map(function(blogs){
            if(blogs.comments) {
                var blogComments = blogs.comments.map(function(i){
                    return (
                        <div>
                            <p>{i.body}</p>
                            <p>{i.date}</p>
                        </div>
                    )
                });
            };

    		return (
    				<div>
    					<h4> {blogs.title} </h4>
    					<article> {blogs.body} <p id="peepsComments"> {blogComments} </p> </article>
                        <form method="POST">
                            <textarea type="text" ref="body" className="form-control" id="commentField" placeholder="Comments About How Awesome I Am"/>
                            <button onClick={self.handleCommentSubmit}  blogId={blogs._id} type="submit" id="commentButton" className="btn btn-primary">Leave Comment</button>
                        </form>
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