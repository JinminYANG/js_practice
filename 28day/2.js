function solution(s, op) {
    let answer = [];

    let first = 0;
    let second = 0;

    let sum = 0;
    for (let i = 1; i < s.length; i++) {
        first = Number(s.substring(0,i));
        second = Number(s.substring(i, s.length));

        sum = eval(first + op + second);
        answer.push(sum);
    }

    console.log(answer);
    return answer;
}

solution("1234", "+");
solution("987987","-");
solution("31402","*");