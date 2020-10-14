// reduce() 함수

function arraySum(arr) {
    let result4 = arr.reduce( (prev, curr) => {
        return prev + curr;
    });

    console.log(result4);
}

arraySum([]);

