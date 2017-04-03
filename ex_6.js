
if (!process.argv[2] || !process.argv[3]) {
    console.log('Informe um diretório e uma extensão');
    return;
}

var dir = process.argv[2];
var ext = process.argv[3];

var module = require('./ls');

function showFiles(err, files) {
    if (err) console.error(err);

    files.forEach(function(f) {
        console.log(f);
    });
}

module(dir, ext, showFiles);
