// 합집합

function union(A, B) {
    let rtn = []; // 리턴할 배열

    rtn = A.concat(B); // A와 B 배열을 합침

    for (let i = 0; i < rtn.length; i++) {
        for (let k = i + 1; k < rtn.length; k++) {
            if (rtn[i] === rtn[k]) { // 중복숫자를 찾아내어
                rtn.splice(k, 1); // 제거
            }
        }
    }

    function ascendingOrder(a, b) { // 숫자 정렬 메소드
        return a - b; // a - b 했을때 a가 크면 양수가 반환 b가 크면 음수가 반환되는 원리
    }
    function descendingOrder(a, b) { // 역순
        return b - a; // b - a 했을 때 b가 크면 양수가 반환 a가 크면 음수가 반환되는 원리
    }


    console.log(rtn); // 정렬되지 않은 배열
    console.log(rtn.sort()); // sort 함수를 이용한 정렬된 배열
    console.log(rtn.sort(ascendingOrder)); // compareFunction을 이용하여 오름차순으로 정렬된 배열
    console.log(rtn.sort(descendingOrder)); // compareFunction을 이용하여 내림차순으로 정렬된 배열
}

union([1, 3, 5, 7], [2, 3, 7, 9, 13]);








