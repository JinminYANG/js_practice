function solution(next_student) {
    let answer = 0;
    let maxNumber = 0;

    for (let index = 0; index < next_student.length; index += 1) {
        const visit = [];
        for (let number = 1; number <= next_student.length; number += 1) {
            visit.push(false);
        }

        let number = 0;
        let nextIndex = index;

        while (!visit[nextIndex] && next_student[nextIndex] !== 0) {
            visit[nextIndex] = true;
            number += 1;
            nextIndex = next_student[nextIndex] - 1;
        }

        if (number >= maxNumber) {
            answer = index;
            maxNumber = number;
        }
    }

    return answer + 1;
}

solution([5, 9, 13, 1, 0, 0, 11, 1, 7, 12, 9, 9, 2]);