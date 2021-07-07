# 디스트럭처링

MDN은 디스트럭처링을 

`디스트럭처렁 할당 문법은 배열의 값 또는 객체의 속성을 풀어서 별개의 변수로 쓸 수 있게 해주는 자바스크립트 표현식`이라고 정의한다.

## 6.1 객체 디스트럭처링

ES6 이전
```
ver person = {
    first: "Jinmin",
    last: "YANG",
};

var first = person.first;
var last = person.last;
```

ES6
```
const person = {
    first: "Jinmin",
    last: "YANG",
};

const {first, last} = person;
```

디스트럭처링을 이용하려 person이 가진 속성에 접근함과 동시에 해당 속성 이름으로 변수 선언이 가능함을 알 수 있다.

중첩된 객체 형태로 데이터가 주어진 경우에도 동일한 방법으로 적용할 수 있다.
```
const person = {
    name: "Jinmin",
    last: "YANG",
    links: {
        social: {
            facebook: "https://www.facebook.com/jinmin",
        },
        website: "https://jinminzzang.github.io/",
    },
};

const {facebook} = person.links.social;
```

변수의 이름을 객체의 속성과 동일하게 지정하는 데 그치지 않고, 다음과 같이 변수 이름을 바꿀 수도 있다.
```
const {facebook: fb} = person.links.social;
// person.links.social.facebook 프로퍼티를 찾아 fb라는 변수로 명명함

console.log(fb);        // https://www.facebook.com/jinmin
console.log(facebook);  // ReferenceError
```

이 코드는 const {facebook: fb} 식의 문법을 사용하여 person.links.social 객체의 속성 facebook을 대상으로 지정하고 const 변수를 fb라고 명명한다.
변수명이 facebook이 아니기 때문에 facebook 값을 출력하려 하면 오류가 발생한다.

기본값을 전달할 수도 있다.
```
// 변수를 fb로 다시 명명하고 기본값을 설정한다.
const {facebook: fb = "https://www.facebook.com"} = person.links.social;
```

<br>

---

## 6.2 배열 디스트럭처링
배열을 디스트럭처링할 때는 객체의 디스트럭처링과는 달리 {}가 아닌 []를 사용한다.
```
const person = {"Jinmin", "YANG", 27};
const [name, surname, age] = person;
```

생성하려는 변수의 수가 배열의 원소보다 적다면 어떻게 할까
```
const person = ["Jinmin", "YANG", 27];
const [name, surname] = person;

console.log(name, surname);
// Jinmin YANG
```
age(27)은 어떤 변수에도 할당되지 않는다.

나머지 모든 값을 얻고 싶다면 레스트 연산자(rest operator)를 사용하면 된다.
```
const person = ["Jinmin", "YANG", "pizza", "ice cream", "cheese cake"];
const [name, surname, ...food] = person;

console.log(food);
// ["pizza", "ice cream", "cheese cake"]
```

배열의 처음 두 값은 name과 surname에 할당되고 나머지(rest)는 food 배열에 할당된다.

<strong>`...가 레스트 연산자를 의미한다.`</strong>

<br>

---

## 6.3 디스트럭처링을 이용하여 변수 교체하기

디스트럭처링 할당을 사용하면 변수의 값을 매우 쉽게 서로 교체할 수 있다.

```
let hungry = "yes";
let full = "no";

[hungry, full] = [full, hungry];
console.log(hungry, full);
// no yes
```