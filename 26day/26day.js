// 김영곤의 오늘의 문제

function solution(string) {
    let rtn = "";

    let strCount = 1;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === string.charAt(i + 1)) {
            strCount++;
        } else {
            rtn += string.charAt(i);
            rtn += strCount;
            strCount = 1;
        }
    }

    // rtn = (rtn.length <= string.length) ? rtn : string; // 삼항연산자 안씀.(클린코드)
    if(rtn.length > string.length){
        rtn = string;
    }


    var sex = "iwantsex";









    return rtn;
}

solution("aaaba");
