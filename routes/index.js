var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'login' });
});

router.route('/index')
    .post(function(req, res) {
        res.render('login', { title: 'Express'});
    })
    .get(function(req, res) {
        res.send({a:'a', b:'b'});
    });

/* 登陆处理. */
router.get('/login', function(req, res, next) {
    res.render('index', {
        title: 'Express',
        firstname: req.query.firstname,
        lastname: req.query.lastname
    });
});

/* 匹配页面后缀 */
router.get(/^\/huopin(\.html|\.htm)?$/, function(req, res, next) {
    res.render('huopin', { title: 'huopin' });
});

module.exports = router;
