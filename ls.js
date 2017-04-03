
module.exports = function(dir, ext, callback) {
    var fs = require('fs');
    var path = require('path');
    var files = [];

    fs.readdir(dir, function(err, list) {
        if (err) return callback(err)

        list.forEach(function (arq) {
            if (path.extname(arq) == "." + ext) {
                files.push(arq);
            }
        });

        callback(null, files);
    });

}

