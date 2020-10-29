// 문자열이 주어졌을 때, 중복되는 문자가 잇는지 확인하는 함수를 작성하시오

function stringsOverlap(string) {

    let rtn = "false";
    let temp = string.charAt(0);

    for (let i = 0; i < string.length; i++) {
        temp = string.charAt(i);
        for (let k = i + 1; k < string.length; k++) {
            if (temp === string.charAt(k)) {
                rtn = "true";
                break;
            }
        }
    }

    console.log(rtn);

}

stringsOverlap("HelloWorld");
stringsOverlap("Hello World");
stringsOverlap("Hello World ");
stringsOverlap("sex");
stringsOverlap("sexking");