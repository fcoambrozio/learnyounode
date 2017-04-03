
if (!process.argv[2]) {
    console.error('Favor informar uma URL.');
    return;
}

var http = require('http');

http.get(process.argv[2], function(response) {
    response.setEncoding("utf8");

    var len = 0;
    var res = '';

    response.on("data", function(data) {
        len += data.length;
        res += data;
    });

    response.on("end", function() {
        console.log(len);
        console.log(res);
    });
});

