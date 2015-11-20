var express = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var app = express();
var router = express.Router();
var Blog = mongoose.model("Blog");

router.use(bodyParser.urlencoded({ extended: true }));

router.route('/')
   
.post(function(req, res) {
        
        var entries = new Blog();

        entries.title = req.body.title;
        entries.body = req.body.body;  

        entries.save(function(err, blog) {
            if (err){
                res.send(err); 
            } else { 
              res.send(blog);
             
        }
        });
        
    })

.get(function(req, res) {
  
   	mongoose.model('Blog').find({})
    .populate('comments')
    .exec(function(err, blog){
     if(err){
       return console.log(err);
     } else {
       res.json(blog)
     }
   });
 });



 router.route('/:id')

   .get(function(req, res) {
       mongoose.model('Blog').findById({
           _id: req.params.id
       }, function(err, blog) {
           if (err)
               res.send(err);

           res.json(blog);
       });
   })

   .put(function(req, res) {

       mongoose.model('Blog').findById({
           _id: req.params.id
       }, function(err, blog) {
         blog.title = req.body.title;
         blog.body = req.body.body;
           if (err)
               res.send(err);

           blog.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Blog updated!' });
            });
           res.json(blog)
       });
   })
   
   .delete(function(req, res) {
       mongoose.model('Blog').remove({
           _id: req.params.id
       }, function(err, blog) {
           if (err)
               res.send(err);

           res.json({ message: 'Successfully deleted' });
       });
   });

router.route('/:id/comment')
 .post(function(req,res){

   mongoose.model('Comment').create({
     body: req.body.body,
     user: req.user

   }, function(err, comment){
     if(err)
       res.send(err)

     mongoose.model('Blog').findById({
       _id: req.params.id

     }, function(err, blog){
      console.log(err, blog);
       if(err)
         res.send(err)
       blog.comments.push(comment._id);
       blog.save();
       res.send(comment);
     })
   })
 })

router.route('/:id/comments')
  .get(function(req, res){
    mongoose.model('Blog').findById({_id: req.params.id})
    .populate('comments').exec(function(err, comments){
      if(err)
        res.send(err)
      res.send(comments)
    })
  })


module.exports = router;