// 우테코 3기 - 1

function solution(grades, weights, threshold) {
    let answer = 0;

    let gradePoints = ["A+", "A0", "B+", "B0", "C+", "C0", "D+", "D0", "F"];
    let pointForWeights = [10, 9, 8, 7, 6, 5, 4, 3, 0];

    let sum = 0;

    for (let i = 0; i < grades.length; i++) {
        for (let k = 0; k < gradePoints.length; k++) {
            if (grades[i] === gradePoints[k]) {
                sum += pointForWeights[k] * weights[i];
            }
        }
    }

    answer = sum - threshold;
    console.log(answer);

    return answer;
}

solution(["A+", "D+", "F", "C0"], [2, 5, 10, 3], 50);
solution(["B+","A0","C+"],[6,7,8],200);