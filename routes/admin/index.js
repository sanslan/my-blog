var express = require('express');
var router = express.Router();

router.get('/test', function (req, res) {
	res.render("admin/index",{layout: 'admin'})
 });
module.exports = router;