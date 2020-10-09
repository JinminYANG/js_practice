function EncodingString(strings) {
    let rtn = '';
    let count = 1;
    let str = strings.charAt(0);
    for (let i = 0; i < strings.length; i++) {
        if (str === strings.charAt(i + 1)) {
            count++;
        } else if (str !== strings.charAt(i + 1) && count === 1) {
            rtn += str;
            str = strings.charAt(i + 1);
        } else {
            rtn += count;
            rtn += str;
            str = strings.charAt(i + 1);
            count = 1;
        }
    }

    console.log(rtn);
}

EncodingString('AAAABBBBBXXVQ');
EncodingString('AAAAAAAAAABBBASTRUHDYTRSDDAAASDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD');