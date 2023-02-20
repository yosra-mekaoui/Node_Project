var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send("router student");
  });
router.get("/st",function(req, res,next){
    res.send("student un");
});
  module.exports = router;