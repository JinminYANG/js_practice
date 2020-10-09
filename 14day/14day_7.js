//차집합 A-B

function minus1(A, B) {
    for (let i = A.length - 1; i >= 0; i--) {
        for (let k = 0; k < B.length; k++) {
            if (A[i] === B[k]) {
                A.splice(i, 1);
            }
        }
    }

    console.log(A);
    return A;
}

minus1([1, 3, 5, 7], [2, 3, 7, 9, 13]);
minus1([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]);


function minus2(A, B) {
    for (let i = B.length - 1; i >= 0; i--) {
        for (let k = 0; k < A.length; k++) {
            if (B[i] === A[k]) {
                B.splice(i, 1);
            }
        }
    }

    console.log(B);
    return B;
}

minus2([1, 3, 5, 7], [2, 3, 7, 9, 13]);
minus2([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]);
