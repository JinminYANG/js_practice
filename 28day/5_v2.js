function solution(penter, pexit, pescape, data) {
    const size = penter.length;

    let answer = penter;
    let dataString = data;

    while(dataString.length !== 0) {
        let partData = dataString.slice(0, size);

        if(penter === partData || pexit === partData || pescape === partData) {
            answer += pescape;
        }

        answer += partData;

        dataString = dataString.slice(size, dataString.length);
    }

    answer += pexit;
    console.log(answer);
    return answer;
}

// solution("10", "11", "00", "00011011");
solution("1100","0010","1001","1101100100101111001111000000");