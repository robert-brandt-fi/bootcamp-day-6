var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/first', function(request, response) {
  console.log("First function called.");
  response.send("The First has been summmoned!");
});

router.get('/second:firstName', function(request, response) {
  console.log("Second function called. " + request.params.firstName);
  response.send("The Second has been summmoned! " + request.params.firstName);
});

module.exports = router;
