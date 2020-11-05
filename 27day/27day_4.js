// 4. character 연산

function solution(pobi, crong) {
    let rtn = -1;

    // let temp = pobi.toString();
    // console.log(temp);
    // console.log(Number(pobi[0].toString().charAt(0)) + Number(pobi[0].toString().charAt(1)));
    // console.log(pobi[0]+1);
    // console.log(pobi[1]);

    if(pobi[0]+1 !== pobi[1]){
        console.log(-1);
        return -1;
    }

    function findmax(array) {
        let max = '';
        let plus = 0;
        let multi = 1;
        for (let i = 0; i < 2; i++) {
            let temp = array[i].toString();
            for (let k = 0; k < temp.length; k++) {
                plus += Number(temp.charAt(k));
                multi *= Number(temp.charAt(k));
            }
            if (plus > multi) {
                max = plus;
            } else {
                max = multi;
            }
            plus = 0;
            multi = 1;
        }

        return Number(max);
    }

    // console.log(findmax(pobi));
    // console.log(findmax(crong));

    if (findmax(pobi) > findmax(crong)) {
        rtn = 1;
    } else if(findmax(pobi) < findmax(crong)){
        rtn = 2;
    } else if(findmax(pobi) === findmax(crong)){
        rtn = 0;
    }

    console.log(rtn);
    return rtn;
}

solution([97, 98], [197, 198]);
solution([131, 132], [211, 212]);
solution([99, 102], [211, 212]);