# 화살표 함수

## 2.1 화살표 함수

뚱뚱한 화살표(=>)를 사용하여 함수를 선언하는 방법인 화살표 함수가 처음 도입되었다. (ES6)

일반적으로 함수를 선언하는 방법
```
const greeting = function(name) {
    return "hello" + name;
};
```

화살표 함수 문법
```
var greeting = (name) => {
    return `hello + ${name}`;
};
```

매개변수가 하나만 있으면 괄호 생략이 가능하다.
```
var greeting = name => {
    return `hello + ${name}`;
};
```

매개변수가 없으면 빈 괄호를 써야한다.
```
var greeting = () => {
    return `hello`;
};
```

<br>

---

## 2.2 암시적 변환

화살표 함수를 사용하면 명시적인 반환을 생략하고 다음과 같이 반환할 수 있다.
```
const greeting = name => `hello ${name}`;
```

ES5와 ES6 비교
```
// ES5
const oldFunction = function(name) {
    return "hello " + name;
};

// ES6
const arrowFunction = name => `hello ${name}`;
```

ES6을 사용하면 코드가 간결해진다.

코드의 간결함보다 중요한 것은 가독성이다. 

팀 단위의 프로젝트에서 팀원이 ES6의 문법을 숙지하지 못했다면, 함수를 다음과 같이 작성하자

```
const arrowFunction = (name) => {
    return `hello ${name}`;
};
```

객체 리터럴을 암시적으로 반환
```
const race = "100m dash";
const runners = ["Bolt", "Gatlin", "Powell"];

const results = runners.map( (runner, i) => ({name: runner, race, place: i + 1}));

console.log(results);
// [{name: "Bolt", race: "100m dash", place: 1}
// {name: "Gatlin", race: "100m dash", place: 2}
// {name: "Powell", race: "100m dash", place: 3}]
```

중괄호 안에 있는 것이 암시적으로 반환하려는 객체 리터럴임을 자바스크립트에 알리려면, 전체를 괄호 안에 감싸야한다.

rece와 race: race의 결과는 동일하다.

<br>

---

## 2.3 화살표 함수는 익명 함수

참조할 이름이 필요하다면 함수를 변수에 할당하면 된다.
```
const greeting = name => `hello ${name}`;

greeting("Tom");
```

<br>

---

## 2.4 화살표 함수와 this 키워드

화살표 함수 내부에서 this 키워드를 사용할 때는 일반 함수와 다르게 동작하므로 주의해야 한다.

화살표 함수를 사용할 때 this 키워드는 상위 스코프에서 상속된다.

```
const box = document.querySelector(".box");
box.addEventListener("click, function() {
    // box에 할당
    this.classList.toggle("opening");

    setTimeout(function() {
        // Window 객체로 설정
        this.classList.toggle("opening");
    }, 500);
});
```

```
const box = document.querySelector(".box");
box.addEventListener("click, function() {
    // box에 할당
    this.classList.toggle("opening");

    setTimeout(() => {
        // box에 할당
        this.classList.toggle("opening");
    }, 500);
});
```

<br>

---

## 2.5 화살표 함수를 피해야 하는 경우

화살표 함수에서 this를 주의해서 사용해야 하는 경우
```
const button = document.querySelector("btn");
button.addEventListener("click", () => {
    // this는 Window 객체를 기리킴.
    this.classList.toggle("on");
});
```

```
const person1 = {
    age: 10,
    grow: function() {
        this.age++;
        console.log(this.age);
    },
};

person1.grow();
// 11

const person2 = {
    age: 10,
    grow: () => {
        // 여기서 this는 Window 객체를 가리킴.
        this.age++;
        console.log(this.age);
    }
}

person2.grow();
// Error
```

화살표 함수와 일반 함수의 또 다른 차이점은 arguments 객체에 대한 접근 방식이다.

arguments 객체는 함수 내부에서 접근할 수 있는 배열 객체이며, 해당 함수에 전달된 인수의 값을 담고있다.

```
function example() {
    console.log(arguments[0]);
}

example(1,2,3);
// 1
```

이와 같이 배열 표기법 arguments[0]을 사용하면 첫 번째 인수에 접근할 수 있다.

this 키워드와 비슷하게 화살표 함수에서 arguments 객체는 부모 스코프의 값을 상속한다.

```
const showWinner = () => {
    const winner = arguments[0];
    console.log(winner);
};

showWinner("Bolt", "Gatlin", "Powell");
// ReferenceError
```

함수에 전달된 모든 인수에 접근하려면, 기존 함수 표기법이나 스프레드 문법을 사용하면 된다.

화살표 함수
```
const showWinner = (...args) => {
    const winner = args[0];
    console.log(winner);
};

showWinner("Bolt", "Gatlin", "Powell");
// Bolt
```

일반 함수
```
const showWinner = function() {
    const winner = arguments[0];
    console.log(winner);
};

showWinner("Bolt", "Gatlin", "Powell");
// Bolt
```