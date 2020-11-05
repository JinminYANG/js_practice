// 7. stack을 활용한 로직

function solution(cryptogram) {
    for (let i = cryptogram.length; i > 0; i--) {
        if (cryptogram.charAt(i) === cryptogram.charAt(i - 1)) {
            let temp = cryptogram.charAt(i) + cryptogram.charAt(i - 1);
            cryptogram = cryptogram.replace(temp, '');
        }
    }

    console.log(cryptogram);
    return cryptogram;
}

solution("browoanoommnaon");
solution("zyelleyz");
solution("noanmmoonaoworb");