
if (process.argv[2]) {
    var arq = process.argv[2];
    var fs = require('fs');
    var lines = 0;

    try {
        fs.readFile(arq, function doneReading(err, fileContents) {
            var str = fileContents.toString();
            var arr = str.split("\n");
            lines = arr.length - 1;
            console.log(lines);
        });
    }
    catch (e) {
        console.log("Não foi possível abrir o arquivo: " + arq);
    }
} else {
    console.log("Informe um arquivo");
}

