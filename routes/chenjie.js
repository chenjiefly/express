var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/api', function(req, res, next) {
  // res.send('<p>hello, I\'m chenjie!</p>' + 
  //          '<p>Your ip is' + req.ip + '</p>' +
  //          '<p>' + {name:'张三', age:40} + '</p>');
    res.send({name:"张三",age:40});
});

module.exports = router;
