// 2. 좌표 계산 패쓰 시ㅡ발

function solution(lands, wells, point) {
    let rtn = false;
    let X1 = 0, X2 = 1, X3 = 2, X4 = 3;

    function left(r) {
        return Math.min(r[X1], r[X2]);
    }

    function right(r) {
        return Math.max(r[X1], r[X2]);
    }

    function top(r) {
        return Math.min(r[Y1], r[Y2]);
    }

    function bottom(r) {
        return Math.max(r[Y1], r[Y2]);
    }

    function overlap1(rect1, rect2) {
        if (right(rect1) <= left(rect2) || right(rect2) <= left(r1)) {
            rtn = false;
        }
        if (bottom(rect1) <= top(rect2) || bottom(rect2) <= top(rect1)) {
            rtn = false;
        }
        rtn = true;
    }

    function overlap2(rects, r) {
        for (let i = 0; i < rects.length-1; i++) {
            if (overlap(i, r)) {
                rtn = true;
            }
        }
        rtn = false;
    }

    rtn = overlap1(lands, point) == false && overlap1(wells, point) == true;

    // console.log(rtn)
    return rtn;
}

solution([[10, 0, 30, 5], [0, 30, 20, 50], [30, 30, 40, 40]], [[15, 15, 25, 25], [40, 10, 50, 20]], [10, 10, 30, 30]);
// solution('hi', '');