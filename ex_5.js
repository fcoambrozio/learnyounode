
if (!process.argv[2] || !process.argv[3]) {
    console.log('Informe um diretório e uma extensão');
    return;
}

var dir = process.argv[2];
var ext = process.argv[3];

var fs = require('fs');
var path = require('path');

fs.readdir(dir, function(err, list) {
    if (err) return callback(err)

    list.forEach(function (arq) {
        if (path.extname(arq) == "." + ext) {
            console.log(arq);
        }
    });
});

