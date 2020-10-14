// reduce() 함수

function arraySum(arr) {
    let result2 = arr.reduce(function (accumulator, currentValue, currentIndex, array) {
        console.log(accumulator + " + " + currentValue);
        return accumulator + currentValue;
    }, 0);

    console.log("합산 결과 = " + result2);
}

arraySum([9, 5, 0, 6, 1, 3]);

