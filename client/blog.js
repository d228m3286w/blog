var React = require("react");
var BlogList = require("./blogList");
// var BlogForm = require("./blogForm");
var BlogBox = require("./blogBox");


React.render(<BlogBox url="/api/blog/"/>, document.getElementById('blog-list'));
// React.render(<BlogForm url="/api/blog/"/>, document.getElementById('BlogFoo'));
