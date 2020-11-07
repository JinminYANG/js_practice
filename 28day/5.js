function solution(penter, pexit, pescape, data) {
    let answer = '';

    answer = penter.concat(data);
    // console.log(answer);
    answer = answer.concat(pexit);
    console.log(answer);

    let temp = '';
    for (let i = answer.length-pexit.length; i > penter.length; i--) {
        // let temp = answer.charAt(i) + answer.charAt(i - 1);
        temp += data.charAt(i);
        console.log(temp);

        console.log(answer);
        if (temp === penter || temp === pexit || temp === pescape) {
            answer = answer.slice(0, i) + pescape + answer.slice(i, answer.length);
            i -= penter.length;
        }

    }

    console.log(answer);

    return answer;
}

// solution("1100","0010","1001","1101100100101111001111000000");
solution("10", "11", "00", "00011011");
