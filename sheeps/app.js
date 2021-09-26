import {
    Hill
} from "./hill.js";

import {
    SheepController
} from "./sheep-controller.js";

import {
    Sun
} from "./sun.js";

class App {
    constructor() {
        // canvas 생성 후 body에 추가
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);

        this.sun = new Sun();

        this.hills = [
            new Hill('#fd6bea', 0.2, 12),
            new Hill('#ff59c2', 0.5, 8),
            new Hill('#ff4674', 1.4, 6)
        ];

        this.sheepController = new SheepController();   // 양떼 관리자 추가

        // 스크린 사이즈를 가져오기 위해 resize 이벤트
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        // canvas의 사이즈를 2배로 해줘서 레티나 디스플레이에서도 선명하게 보이도록 만듦
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);

        this.sun.resize(this.stageWidth, this.stageHeight);

        for (let i = 0; i < this.hills.length; i++) {
            this.hills[i].resize(this.stageWidth, this.stageHeight);
        }

        this.sheepController.resize(this.stageWidth, this.stageHeight);
    }

    animate(t) {
        requestAnimationFrame(this.animate.bind(this));

        // canvas clear
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.sun.draw(this.ctx, t);

        let dots;
        for (let i = 0; i < this.hills.length; i++) {
            dots = this.hills[i].draw(this.ctx);
        }

        this.sheepController.draw(this.ctx, t, dots);
        // 마지막 언덕의 자표에 양을 그릴 것이니 hill 클래스에서 리턴값으로 받은 언덕들의 좌표를 sheepController에 넘겨주고 fps를 위한 타임 스탬프를 파라미터로 넘겨준다.
    }
}

window.onload = () => {
    new App();
}