var express = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var app = express();
var router = express.Router();
var Blog = mongoose.model("Blog");
router.route('/')
   
.post(function(req, res) {
        
        var entries = new Blog();

        entries.title = req.body.title;
        entries.body = req.body.body;  

        entries.save(function(err) {
            if (err)
                res.send(err);
              res.redirect("/blog.html")
            // res.json({ message: 'Blog created!' });
        });
        
    })

.get(function(req, res) {
  
   	mongoose.model('Blog').find({}, function(err, blog){
     if(err){
       return console.log(err);
     } else {
       // var arrByTitle = blog.filter(filterByTitle);
       // res.json(arrByTitle);
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

   module.exports = router;