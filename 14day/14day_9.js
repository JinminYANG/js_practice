// 여집합

function complementSet(A, B) {
    function ascendingOrder(a, b) {
        return a - b;
    }

    let union = A.concat(B);
    for (let i = 0; i < union.length; i++) {
        for (let k = i + 1; k < union.length; k++) {
            if (union[i] === union[k]) {
                union.splice(k, 1);
            }
        }
    }
    union.sort(ascendingOrder); // 공집합
    console.log(union);

    let intersect = []; // 차집합
    for (let i = 0; i < A.length; i++) {
        for (let k = 0; k < B.length; k++) {
            if (A[i] === B[k]) {
                intersect.push(B[k]);
            }
        }
    }
    intersect.sort(ascendingOrder);
    console.log(intersect);

    let complement = union; // 여집합
    for (let i = 0; i < intersect.length; i++) {
        for (let k = 0; k < union.length; k++) {
            if(intersect[i] === union[k]){
                complement.splice(k,1);
            }
        }
    }
    complement.sort(ascendingOrder);
    console.log(complement);
}

complementSet([1, 3, 5, 7], [2, 3, 7, 9, 13]);