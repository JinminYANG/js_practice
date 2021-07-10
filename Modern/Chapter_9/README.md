# 스프레드 연산자와 레스트 매개변수

## 9.1 스프레드 연산자

스프레드 문법

`스프레드 문법을 사용하면 0개 이상의 인수(함수 호출용) 또는 원소(배열 리터럴용)가 예상되는 위치에서 배열 표현식 또는 문자열과 같은 이터러블 항목을 확장하거나 0개 이상의 키/값 쌍(객체 리터럴용)이 예상되는 위치에서 객체 표현식을 확장할 수 있다.`

### 배열의 결합

```
const veggie = ["tomato", "cucumber", "beans"];
const meat = ["pork", "beef", "chicken"];

const menu = [...veggie, "pasta", ...meat];
console.log(menu);
// ["tomato", "cucumber", "beans", "pasta", "pork", "beef", "chicken"];
```

여기서 ...이 스프레드 문법으로 veggie와 meat 배열의 모든 개별 원소를 풀어서 menu 배열에 넣었고, 동시에 그 사이에 새 항목을 추가했다.

<br>

### 배열의 복사

스프레드 문법은 배열의 복사본을 생성할 때 매우 유용하다.
```
const veggie = ["tomato", "cucumber", "beans"];
const newVeggie = veggie;

veggie.push("peas");
console.log(veggie);
// ["tomato", "cucumber", "beans", "peas"]

console.log(newVeggie);
// ["tomato", "cucumber", "beans", "peas"]
```

기존 배열(veggie)를 수정하자 새 배열(newVeggie)도 변경되었다.

실제로 복사본을 만든 것이 아니라, 새 배열은 단순히 이전 배열을 참조하기 때문이다.

ES6 이전
```
const veggie = ["tomato", "cucumber", "beans"];

// 빈 배열을 새로 생성하고 기존 배열의 값을 새 배열에 이어 붙인다.
const newVeggie = [].concat(veggie);

veggie.push("peas");
console.log(veggie);
// ["tomato", "cucumber", "beans", "peas"]

console.log(newVeggie);
// ["tomato", "cucumber", "beans"]
```

ES6
```
const veggie = ["tomato", "cucumber", "beans"];
const newVeggie = [...veggie];

veggie.push("peas");
console.log(veggie);
// ["tomato", "cucumber", "beans", "peas"]

console.log(newVeggie);
// ["tomato", "cucumber", "beans"]
```

스프레드 연산자의 문법은 `...Array` 이런 방식이다.

예제 코드에서는 변수 newVeggie를 배열 veggie의 복사본으로 만들기 위해, 우선 newVeggie에 배열을 할당하고 그 내부에 스프레드 연산자를 통해 veggie 변수의 모든 원소를 넣었다.

<br>

### 함수와 스프레드 연산자

인수들을 원소로 가지는 배열에 스프레드 연산자를 사용하면 함수를 쉽게 호출할 수 있다.

```
// 기존 방식
function doStuff (x, y, z) {
    console.log(x + y + z);
}

var args = [0, 1, 2];

// 함수 호출, 인수 전달
doStuff(apply,(null, args));


// 스프레드 문법 사용
doStuff(...args);
// 3
console.log(args);
// [0, 1, 2];
```

이 예제에서 doStuff 함수는 3개의 매개변수를 받는다.

doStuff 함수를 호출할 때 args 배열을 ...args와 같이 써서 스프레드 연산자와 함께 함수에 전달할 수 있다.

이렇게 하면 굳이 .apply() 사용에 의존하지 않아도 된다.

```
const name = ["Jinmin", "YANG"];

function greet(first, last) {
    console.log(`Hello ${first} ${last}`);
}

greet(...name);
// Hello Jinmin YANG
```

배열의 두 값은 함수의 두 인수에 자동으로 할당된다.

```
const name = ["Jon", "Paul", "Jones"];

function greet(first, last) {
    console.log(`Hello ${first} ${last}`);
}

greet(...name);
// Hello Jon Paul
```

지정된 인수보다 더 많은 값을 제공하는 경우, 첫 번째 인수부터 할당되고 초과된 인수는 제외된다.

<br>

### 객체 리터럴과 스프레드(ES2018)

```
let person = {
    name: "Jinmin",
    surname: "YANG",
    age: 27,
};

let clone = {...person};
console.log(clone);
// {name: "Jinmin", surname: "YANG", age: 27}
```

<br>

---

## 9.2 레스트 매개변수

레스트 문법은 점 3개로 이루어졌다는 점에서 스프레드 문법과 똑같지만 기능적을으로는 그 반대이다.

스프레드는 배열을 '확장'하는 반면

레스트는 여러 원소를 하나의 원소로 '압축'한다.

```
const runners = ["Tom", "Paul", "Mark", "Luke"];
const [first, second, ...losers] = runners;

console.log(...losers);
// Mark Luke
```

처음 두 값은 first, second 변수에 저장하고, 나머지 원소는 레스트 연산자를 사용하여 losers 변수에 배열로 담는다.

