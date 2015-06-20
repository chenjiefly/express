var express = require('express');
var fs = require('fs');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.sendFile('/Users/chenjie/ap/style/style-tempo/app.config.js');
});

/* 使用fs模块读取本地文件 */
router.get('/local', function(req, res, next) {
    var filePath = '/Users/chenjie/Documents/1、入职学习/2、入门学习/3、Node.js/express/demoEjs/public/files/abc.txt';
    var data = '';
    var date = new Date();
    var array = [];
    var dom = '';

    data = "欢迎您！本次登陆时间为" + date.toLocaleString() + '\n';
    // 写文件
    fs.writeFile(filePath, data, {flag: 'a', encoding: 'utf8'}, function(err){
        if(err){
            console.log('写入文件失败');
        }else{
            console.log('保存成功, 赶紧去看看乱码吧');
        }
    })

    // 读文件
    fs.readFile(filePath, {flag: 'r+', encoding: 'utf8'}, function(err, data){
        var html;

        if(err){
            console.log(err);
        }else{
            array = data.split('\n');
            html = '<p>' + array.join('</p><p>') + '</p>';
            res.send(html);
        }
    });
});

module.exports = router;
