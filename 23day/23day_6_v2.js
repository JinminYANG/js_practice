// 백준

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
});

rl.on('line', function (line) {
    let left = 0;
    let right = line.length - 1;
    while (left < right) {
        if (line.charAt(left) !== line.charAt(right)) {
            console.log(0);
            rl.close();
        }
        left++;
        right--;
    }
    console.log(1);
    rl.close();
}).on("close", function () {
    process.exit();
});