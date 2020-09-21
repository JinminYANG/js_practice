var arr = [];  // arr 배열을 생성

for (var row = 0; row < 3; row++) {   // 배열은 3행까지
    arr[row] = [];   // arr배열의 요소에 배열을 생성
    for (var column = 0; column < 4; column++) {   // arr요소안에 배열의 요소는 4행까지
        arr[row][column] = row + "," + column;   // 각각의 배열 요소를 생성
        console.log(arr[row][column] + " ");   // 각 배열 요소에 접근하여 출력
    }
}





