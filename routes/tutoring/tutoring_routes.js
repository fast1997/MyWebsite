var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('tutoring/tutoring', { title: 'Tutoring' });
});

module.exports = router;