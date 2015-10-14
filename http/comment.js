//测试性能ab -n1000 -c10 http://localhost:2015/

var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    'content': '一起期待下一期的课程',
    'cid': 353
});
console.log(postData);

var options = {
    hostname: 'www.imooc.com',
    port: 80,
    path: '/course/docomment',
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'td_cookie=502394284; imooc_uuid=341c656b-8c4b-43e2-aeab-f65aeab97511; loginstate=1; apsid=gzMTg1ZWYzODZjYWRlMTNmODAwZGZlYTkxYTRmODYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjA1MTI4OQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzODIzMTY1MzNAcXEuY29tAAAAAAAAAAAAAAAAAAAAADM3YzM4N2NiNjAzZmExMTc3NDNhN2NmMWJjYWQ3YzRjM9p7VTPae1U%3DZD; PHPSESSID=dht5h3tnipt3pu1b6gef5cd153; td_cookie=503112882; cvde=561c9d96b717a-38; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1444617694,1444715958; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1444726202',
        'Host': 'www.imooc.com',
        'Origin': 'http://www.imooc.com',
        'Referer': 'http://www.imooc.com/comment/353',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.130 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
};


var req = http.request(options, function(res) {
    console.log('Status:' + res.statusCode);
    console.log('headers:' + JSON.stringify(res.headers));

    res.on('data', function(chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    });
    res.on('end', function() {
        console.log('评论完毕！')
    });

});


req.on('error', function(e) {
    console.log('Error: ' + e.message);
});


req.write(postData);

req.end();
