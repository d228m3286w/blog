var React = require('react');

var CommentForm = React.createClass({
	 handleCommentSubmit: function(e) {
    e.preventDefault();

    var body = React.findDOMNode(this.refs.body).value.trim();
    var data = ({body: body});
     	$.ajax({
            url: "/api/blog/" + this.props.blogId + "/comment",
            dataType: 'json',
            data: data,
            type: 'POST',
                success:function(response){
                  if(this.props.onPost){
                    this.props.onPost()
                  }
                }.bind(this),
                error: function(xhr,status, err){
                    console.log("NOT POSTING DATA")
                    console.log(data)
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
        })
      React.findDOMNode(this.refs.body).value = "Thank You for your Comment"
    },

render: function() {
	return(
		<div>
  			<form method="POST">
  				<textarea type="text" ref="body" className="form-control" id="commentField" placeholder="Comments About How Awesome I Am"/>
				<button onClick={this.handleCommentSubmit} type="submit" id="commentButton" className="btn btn-primary">Leave Comment</button>
  			</form>
 		</div>
  )
}
});
module.exports = CommentForm;
   