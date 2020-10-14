// reduce() 함수

function arraySum(arr) {
    let result3 = arr.reduce((prev, curr) => {
        console.log(prev + " + " + curr);
        return prev + curr;
    }, 0);
    console.log("합산 결과 = " + result3);
}

arraySum([9, 5, 0, 6, 1, 3])

