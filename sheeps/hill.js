export class Hill {
    constructor(color, speed, total) {
        this.color = color;
        this.speed = speed;
        this.total = total;
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.points = [];   // 포인트 배열 생성
        this.gap = Math.ceil(this.stageWidth / (this.total - 2));
        // 포인트 개수를 스테이지 넓이로 딱 맞게 나누지 않고 토탈 개수에서 -2 정도를 뺀 값 (더 넓게 간격 정의) 스테이지 보다 크게 그려지게 정의 / 화면 밖에서 나오는 양을 표현하기 위해

        // 포인트 저장
        for (let i = 0; i < this.total; i++) {
            this.points[i] = {
                x: i * this.gap,    // 각 좌표의 x값은 토탈 포인트의 개수만큼
                y: this.getY()      // 랜덤 정의
            };
        }
    }

    // 언덕을 canvas에 그리는 함수
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();

        let cur = this.points[0];
        let prev = cur;

        let dots = [];      // 곡선의 좌표를 양의 좌표를 찾는데 써야하므로 dots에 저장
        cur.x += this.speed;    // 언덕이 움직이기 위한 값

        // 언덕 x 좌표의 시작점이 화면 밖으로 나오기 전에 새로운 언덕을 배옆 앞에 추가해주면 언덕이 잘려보이지 않음
        if (cur.x > -this.gap) {
            this.points.unshift({
                x: -(this.gap * 2),
                y: this.getY()
            });
        } else if (cur.x > this.stageWidth + this.gap) {    // 화면이 일정 영역 이상에서 사라지면
            this.points.splice(-1);     // 배열에서 빼줘서 배열을 관리
        }

        ctx.moveTo(cur.x, cur.y);

        let prevCx = cur.x;
        let prevCy = cur.y;

        for (let i = 1; i < this.points.length; i++) {
            cur = this.points[i];
            cur.x += this.speed;

            const cx = (prev.x + cur.x) / 2;
            const cy = (prev.y + cur.y) / 2;
            ctx.quadraticCurveTo(prev.x, prev.y, cx, cy);   // 포인트 배열을 가져와서 quadraticCurveTo 함수로 곡선을 그린다.

            dots.push({
                x1: prevCx,
                y1: prevCy,
                x2: prev.x,
                y2: prev.y,
                x3: cx,
                y3: cy,
            });     // dots 리턴 값

            prev = cur;
            prevCx = cx;
            prevCy = cy;
        }

        ctx.lineTo(prev.x, prev.y);
        ctx.lineTo(this.stageWidth, this.stageHeight);
        ctx.lineTo(this.points[0].x, this.stageHeight);
        ctx.fill();

        return dots;
    }

    // 언덕의 Y값을 랜덤으로 주기위한 함수
    getY() {
        const min = this.stageHeight / 8;       // 스테이지 높이를 8로 나눈 값 (기준)
        const max = this.stageHeight - min;
        return min + Math.random() * max;
    }

}