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
  console.log(`Second function called: ${request.params.firstName}!`);
  response.send(`The Second has been summoned! ${request.params.firstName}!`);
});

router.post('/', function(request, response) {
  console.log(request.body);
  response.send(request.body);
});

router.post('/third', function(request, response) {
  console.log(`Third function called: ${request.body.firstName}!`);
  response.send(`The third has been invoked, and it calls upon  
                ${request.body.firstName}!`);
});

module.exports = router;
