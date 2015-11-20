
var mongoose     = require('mongoose');
// var Schema       = mongoose.Schema;

var BlogSchema   = new mongoose.Schema({
   title: String,
   body: String,
   author: String,
   img: String,
   tags: Array,
   comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
   date: { type: Date, default: Date.now}
   
});

mongoose.model('Blog', BlogSchema);
