// 클래스 (class)
// 클래스에 원하는 기능을 다 정의하게 되면 사용자가 자세하게 컨트롤할 수없고, 재사용이 떨어진다.
// 콜백함수를 이용하여 클래스를 만들게 되면, 사용자가 입맛에 맞게 만들 수 있다.

class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase() {
        this.counter++;
        console.log(this.counter);

        if (this.counter % 5 === 0) {
            if (this.callback) {
                this.callback(this.counter);
            }
        }
    }
}

function printSomeThing(num) {
    console.log(`Wow! ${num}`);
}

function alertNum(num) {
    alert(`Wow! ${num}`);
}

// new 연산자를 이용해서 class를 생성
// constructor가 실행됨
const coolCounter = new Counter();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

const printCounter = new Counter(printSomeThing);
const alertCounter = new Counter(alertNum);
