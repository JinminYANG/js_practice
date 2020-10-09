function decodingString(strings) {
    let rtn = '';

    let int = '';
    for (let i = 0; i < strings.length; i++) {
        if (!isNaN(strings.charAt(i))) { // i 번째가 숫자면
            int += strings.charAt(i);
            console.log(parseInt(int));
        } else { // 숫자가 아니면 (문자면)
            if (!isNaN(strings.charAt(i - 1))) { // i-1 번째가 숫자면
                for (let k = 0; k < int; k++) {
                    rtn += strings.charAt(i);
                }
            }else{ // i-1번째가 문자면 (문자 앞에 숫자가 없을 때)
                rtn += strings.charAt(i);
            }
            int = '';
        }
    }
    console.log(rtn);
}

decodingString("5A10BXV5B");
decodingString("10A101B");
