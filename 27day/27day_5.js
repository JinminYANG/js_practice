// 5. 369 게임

function solution(number) {
    let rtn = 0;
    let numberToChar = number.toString();
    // console.log(numberToChar.charAt(0));

    for (let i = 1; i <= numberToChar; i++) {
        for (let k = 0; k < i.toString().length; k++) {
            if (i.toString().charAt(k) === '3' || i.toString().charAt(k) === '6' || i.toString().charAt(k) === '9') {
                rtn += 1;
            }
        }
    }

    console.log(rtn);
    return rtn;
}

solution(13);
solution(33);