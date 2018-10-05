var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('photography/photography', { title: 'Photography' });
});
router.get('/adventure', function(req, res, next) {
    res.render('photography/adventure', { title: 'Adventures Album' });
});
router.get('/pets', function(req, res, next) {
    res.render('photography/pets', { title: 'Pets Album' });
});
router.get('/food', function(req, res, next) {
    res.render('photography/food', { title: 'Food Album' });
});
module.exports = router;