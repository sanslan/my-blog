var express = require('express');
var router = express.Router();
var Post = require('../models/posts');

router.get('/:id', function (req, res) {
	var id = req.params.id;

	Post.findOne({"_id": id})
		.exec(function(err, post) {
		    if(err) {
		      res.send('error occured')
		    } else {
					res.render('singlePost',{post: post});
					
		    }
	  });
 });
module.exports = router;