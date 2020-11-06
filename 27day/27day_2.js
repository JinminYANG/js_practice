// 2. 좌표 계산 모르겠다.

function solution(lands, wells, point) {
    let X1 = 0, Y1 = 1, X2 = 2, Y2 = 3;

    function left(r) {      // 사각형 r의 왼쪽 경계 좌표
        return Math.min(r[X1], r[X2]);
    }

    function right(r) {     // 사각형 r의 오른쪽 경계좌표
        return Math.max(r[X1], r[X2]);
    }

    function top(r) {       // 사각형 r의 위쪽 경계좌표
        return Math.min(r[Y1], r[Y2]);
    }

    function bottom(r) {    // 사각형 r의 아래쪽 경계좌표
        return Math.max(r[Y1], r[Y2]);
    }

    function overlap1(rect1, rect2) {       // 두 사각형 rect1, rect2가 겹치는가? (경계선이 닿는 것은 겹치는 것이 아님)
        if (right(rect1) <= left(rect2) || right(rect2) <= left(rect1)) {
            console.log('false');
            return false;
        }
        if (bottom(rect1) <= top(rect2) || bottom(rect2) <= top(rect1)) {
            console.log('false');
            return false;
        }
        console.log('true');
        return true;
    }

    function overlap2(rects, r) {           // 사각형 목록 rects의 사각형 중에서, 사각형 r과 겹치는 것이 있는가?
        for (let i = 0; i < rects.length; i++) {
            if (overlap1(rects[i], r)) {
                console.log('true');
                return true;
            }
        }
        console.log('false');
        return false;
    }

    return overlap2(lands, point) == false && overlap2(wells, point) == true;
}

solution([[10, 0, 30, 5], [0, 30, 20, 50], [30, 30, 40, 40]], [[15, 15, 25, 25], [40, 10, 50, 20]], [10, 10, 30, 30]);
// solution([[0, 0, 20, 10], [10, 20, 20, 40], [30, 0, 50, 20]], [[20, 40, 30, 50], [30, 20, 50, 30]], [20, 30, 30, 40]);
