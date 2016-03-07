var express = require('express');
var router = express.Router();

/* GET Login page. */
router.get('/login', function(req, res) {
  return res.send('Login Page');
});

/* GET Signup page. */
router.get('/register', function(req, res) {
  return res.send('Singup Page');
});

module.exports = router;