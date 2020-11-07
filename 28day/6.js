function solution(logs) {
    let answer = [];

    let studentNumbers = [];
    let questionNumbers = [];
    let scores = []

    for (let i = 0; i < logs.length; i++) {
        studentNumbers.push(logs[i].split(" ")[0]);
        questionNumbers.push(logs[i].split(" ")[1]);
        scores.push(logs[i].split(" ")[2]);
    }
    // console.log(studentNumbers);
    // console.log(questionNumbers);
    // console.log(scores);

    let idx = 0;
    for (let i = 0; i < questionNumbers.length; i++) {
        for (let k = i + 1; k < questionNumbers.length; k++) {
            if (questionNumbers[i] === questionNumbers[k]) {
                if (scores[i] === scores[k]) {
                    if (studentNumbers[i] !== studentNumbers[k]) {
                        answer.push(studentNumbers[i]);
                        answer.push(studentNumbers[k]);
                    }
                }
            }
        }
    }


    // console.log(answer);

    let rtn = [];

    const res2 = answer.reduce((allNames, name) => {
        if (allNames[name]) {
            allNames[name]++
        } else {
            allNames[name] = 1
        }
        if (allNames[name] >= 5) {
            rtn.push(name);
        }
        return allNames;
    }, {});


    if (rtn.length === 0) {
        rtn.push("None");
    }
    console.log(rtn);
    return rtn;
}

solution(["0001 3 95", "0001 5 90", "0001 5 100", "0002 3 95", "0001 7 80", "0001 8 80", "0001 10 90", "0002 10 90", "0002 7 80", "0002 8 80", "0002 5 100", "0003 99 90"]);
// solution(["1901 1 100", "1901 2 100", "1901 4 100", "1901 7 100", "1901 8 100", "1902 2 100", "1902 1 100", "1902 7 100", "1902 4 100", "1902 8 100", "1903 8 100", "1903 7 100", "1903 4 100", "1903 2 100", "1903 1 100", "2001 1 100", "2001 2 100", "2001 4 100", "2001 7 95", "2001 9 100", "2002 1 95", "2002 2 100", "2002 4 100", "2002 7 100", "2002 9 100"]);