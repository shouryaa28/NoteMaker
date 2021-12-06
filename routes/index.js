var express = require('express');
var router = express.Router();
 
const postSchema=require('./users')

/* GET home page. */

router.get('/', function(req,res){
  postSchema.find()
  .then(function(posts){
    res.render('index',{allposts: posts})
  })
})

//there's a write page(where you can write) then on clicking submit ('click' doc.queryselector) you are redirected to back to the home page (writepost will sent)

router.get('/write',function(req,res){
    res.render('write')
})
router.post('/writepost',function(req,res){
  postSchema.create({
    post:req.body.post
  }).then(function(createdPost){
    res.redirect('/')
})
})

//delete and theres no page available for this therefore directly it will direct us to the home page 

router.get('/delete/:aaidee',function(req,res){
  postSchema.findOneAndDelete({
    _id: req.params.aaidee
  }).then(function(){
    res.redirect('/')
  })
})  

//updatepage and then the one which will redirect to home page

router.get('/update/:aaidee',function(req,res){
  postSchema.findOne({
    _id: req.params.aaidee
  }).then(function(foundData){
    res.render('update',{data: foundData})
  })
})
router.post('/updatekaro/:aaidee',function(req,res){
  postSchema.findOneAndUpdate({
    _id: req.params.aaidee},{post:req.body.post})
    .then(function(){
  res.redirect('/')
})
})

module.exports = router;
