// 1. 정수 나눗셈과 나머지 연산자

function solution(money) {
    let cash = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
    let rtn = [0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 0; i < cash.length; i++) {
        if (money % cash[i] != money) {
            rtn[i] += Math.floor(money / cash[i]);
            money = money % cash[i];
        }
    }

    console.log(rtn);
    return rtn;
}

solution(50237);
solution(15000);