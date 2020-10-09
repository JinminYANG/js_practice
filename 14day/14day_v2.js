function decodingString(strings) {
    let output = ""; //최종 결과 문자열을 위한

    let stringForNumber = ""; //숫자를 위한 문자열

    for (let index = 0; index < strings.length; index++) {
        let c = strings.charAt(index);

        //문자일 경우
        if (isNaN(c)) {

            let number;

            if (stringForNumber.length === 0) {
                number = 1;
            } else {
                number = Number(stringForNumber);
            }

            for (let n = 0; n < number; n++) {
                output += c;

                stringForNumber = "";
            }

        } else {
            stringForNumber += c;
        }
    }

    return output;
}

console.log(decodingString("5A6BX2V"))
console.log(decodingString("5A10BX2V"))

