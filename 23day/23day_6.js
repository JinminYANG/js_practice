// 백준

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
});

rl.on('line', function (line) { // input을 받아서 콘솔창에 띄워주는거
    if (line.length % 2 !== 0) { // input이 홀수일 때
        let lastStrIndex = line.length - 1;
        for (let i = 0; i < (line.length / 2) - 1; i++) {
            let lastStr = line.charAt(lastStrIndex);
            if (line.charAt(i) !== lastStr) {
                console.log(0);
                rl.close();
            } else {
                lastStrIndex--;
            }
        }
        console.log(1);
    } else { // input이 짝수일 때
        let lastStrIndex = line.length - 1;
        for (let i = 0; i < (line.length / 2); i++) {
            let lastStr = line.charAt(lastStrIndex);
            if (line.charAt(i) !== lastStr) {
                console.log(0);
                rl.close();
            } else {
                lastStrIndex--;
            }
        }
        console.log(1);
    }

    rl.close();
}).on("close", function () { // input을 받았으면 콘솔을 종료시키는거
    process.exit();
});

