
if (process.argv[2]) {
    var arq = process.argv[2];
    var fs = require('fs');

    try {
        var buf = fs.readFileSync(arq);
        var str = buf.toString();
        var arr = str.split("\n");

        console.log(arr.length - 1);
    }
    catch (e) {
        console.log("Não foi possível abrir o arquivo: " + arq);
    }
} else {
    console.log("Informe um arquivo");
}

