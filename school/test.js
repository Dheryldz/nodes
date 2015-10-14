var form = {
    msg: '蛤',
    psw: '2333'
}

var postData = querystring.stringify(form, null, null, {
    encodeURIComponent: function(str) {
        var chinese = new RegExp(/[^\x00-\xff]/g);
        var gbkBuffer = null;
        var i = 0;
        var tempStr = '';
        if (chinese.test(str)) { //
            gbkBuffer = iconv.encode(str, 'gbk');
            for (i; i < gbkBuffer.length; i++) {
                tempStr += '%' + gbkBuffer[i].toString(16);
            };
            tempStr = tempStr.toUpperCase();
            return tempStr;
        } else {
            return querystring.escape(str);
        }
    }
});

var options = {
    hostname: 'localhost',
    port: 8080,
    path: '/test/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
    } //Cookie也是放在请求头里面
};

var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    //响应的Cookie在res.header['set-cookie']
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    // res.setEncoding('binary');//接收参数的时候先不要解码
    res.on('data', function(chunk) {
        console.log('BODY: ' + iconv.decode(chunk, 'gbk')); //gbk解码
    });
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

// write data to request body
req.write(postData);
req.end();
