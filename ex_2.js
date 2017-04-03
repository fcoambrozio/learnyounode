
var sum = 0;

process.argv.forEach(function(val, idx) {
    if (idx > 1) {
        sum += +val;
    }
});

console.log(sum);
