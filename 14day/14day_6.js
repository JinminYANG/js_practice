//교집합

function intersect(A, B) {
    let rtn = [];
    for (let i = 0; i < A.length; i++) {
        for (let k = 0; k < B.length; k++) {
            if(A[i] === B[k]){
                rtn.push(A[i]);
            }
        }
    }
    console.log(rtn);
    return rtn;
}

intersect([1, 3, 5, 7], [2, 3, 7, 9, 13]);
intersect([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]);