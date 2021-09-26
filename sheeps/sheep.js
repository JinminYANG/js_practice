export class Sheep {
    constructor(img, stageWidth) {
        this.img = img;

        this.totolFrame = 8;    // 양의 프레임 
        this.curFrame = 0;      // 현재 프레임

        this.imgWidth = 360;    // 양 그림 한 장의 넒이
        this.imgHeight = 300;   // 와 높이

        this.sheepWidth = 180;  // 레티나 디스플레이 고려하여 절반 사이즈
        this.sheepHeight = 150;

        this.sheepWidthHalf = this.sheepWidth / 2;
        this.x = stageWidth + this.sheepWidth;
        this.y = 0;
        this.speed = Math.random() * 2 + 1;     // 속도 랜덤

        this.fps = 24;      // 어도비 애니메이트에서 사용했던 24fps
        this.fpsTime = 1000 / this.fps;     // 타임 스탬프와 비교 값이 됨
    }

    draw(ctx, t, dots) {
        // requestAnimationFrame 함수에서 넘겨받은 타임 스탬프를 시간으로 정의
        if (!this.time) {
            this.time = t;
        }

        // 시간을 내가 정한 fps의 시간과 비교하는 코드
        // 프레임 증가시키는 속도를 시간에 맞춰서 조절한다.
        const now = t - this.time;
        if (now > this.fpsTime) {
            this.time = t;

            // 프레임에 맞춰 해당 프레임에 맞는 이미지를 가져와서
            this.curFrame += 1;
            // 양이 움직이는 애미메이션을 만듦
            if (this.curFrame == this.totolFrame) {
                this.curFrame = 0;
            }
        }


        this.animate(ctx, dots);
    }

    animate(ctx, dots) {
        this.x -= this.speed;       // x 값을 스테이지 넓이에 양의 넓이를 더한 만큼 초기값으로 지정
        const closest = this.getY(this.x, dots);
        this.y = closest.y;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(closest.rotation);
        ctx.fillStyle = '#000000';
        /*        ctx.fillRect(     // 사각형 그리기
                    -this.sheepWidthHalf,       // 하단 중심점을 기준으로 하기 위해 x를 - 양의 절반
                    -this.sheepHeight + 20,  // y를 - 양의 높이 + 그림에서 생기는 여백 (20)
                    this.sheepWidth,            // 양의 크기
                    this.sheepHeight            // 양의 크기
                );*/
        ctx.drawImage(      // 양 그리기
            this.img,
            this.imgWidth * this.curFrame,
            0,
            this.imgWidth,
            this.imgHeight,
            -this.sheepWidthHalf,
            -this.sheepHeight + 20,
            this.sheepWidth,
            this.sheepHeight
        )
        ctx.restore();                  // 저장했던 캔버스를 복귀
    }

    // 어떤 곡선이 x 값에 해당하는지 확인하는 함수
    getY(x, dots) {
        for (let i = 1; i < dots.length; i++) {
            if (x >= dots[i].x1 && x <= dots[i].x3) {
                return this.getY2(x, dots[i]);
            }
        }

        return {
            y: 0,
            rotation: 0
        };
    }

    // 곡선의 비율 t를 200 정도의 촘촘한 비율로 곡선을 나누고
    getY2(x, dot) {
        const total = 200;
        // x 값과 가장 근사한 값의 곡선의 좌표를 가져온다.
        let pt = this.getPointOnQuad(dot.x1, dot.y1, dot.x2, dot.y2, dot.x3, dot.y3, 0);
        let prevX = pt.x;
        for (let i = 1; i < total; i++) {
            const t = i / total;
            pt = this.getPointOnQuad(dot.x1, dot.y1, dot.x2, dot.y2, dot.x3, dot.y3, t);

            if (x >= prevX && x <= pt.x) {
                return pt;
            }
            prevX = pt.x;
        }

        return pt;
    }

    // Quadratic Bezier일 때 비율 t에 따른 좌표를 찾는 공식
    getQuadValue(p0, p1, p2, t) {
        return (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * p1 + t * t * p2;
    }

    getPointOnQuad(x1, y1, x2, y2, x3, y3, t) {
        const tx = this.quadTangent(x1, x2, x3, t);
        const ty = this.quadTangent(y1, y2, y3, t);

        // 각도를 구하는 함수 atan2 (수직의 각도를 구하는 방법)  / 수평으로 변환하려면 90도를 더해주면 된다.  /  return 값은 degree가 아닌 radian이므로 변환해서 더해준다.
        const rotation = -Math.atan2(tx, ty) + (90 * Math.PI / 180);
        return {
            x: this.getQuadValue(x1, x2, x3, t),
            y: this.getQuadValue(y1, y2, y3, t),
            rotation: rotation,
        };
    }

    // 곡선위 좌표의 수직으로 된 기울기를 찾는 공식
    quadTangent(a, b, c, t) {
        return 2 * (1 - t) * (b - a) + 2 * (c - b) * t;
    }
}

