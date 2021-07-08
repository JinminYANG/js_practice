# 루프

## 7.1 for of 루프

ES6는 새로운 유형의 루프인 for of 루프를 도입했다.

### 배열에 대한 반복

기존 방법
```
var fruits = ['apple', 'banana', 'orange'];
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// apple
// banana
// orange
```

ES6
```
const fruits = ['apple', 'banana', 'orange'];
for (const fruit of fruits) {
    console.log(fruit);
}
// apple
// banana
// orange
```

### 객체에 대한 반복
객체는 이터러블이 아니다.

Object.keys()를 사용하여 객체의 모든 키를 가져온 후, 키에 대해 반복을 수행하면서 값에 접근하는 것이 가능하다.

```
const car = {
    maker: "BMW",
    color: "red",
    year: "2010",
};

for (const prop of Object.keys(car)) {
    const value = car[prop];
    console.log(prop, value);
}
// maker BMW
// color red
// year 2010
```

ES6 함수인 Object.entries()를 사용하여 객체의 모든 키/값 쌍을 가져온 후, 각 키/값 쌍에 대해 반복을 수행하는 방법도 있다.

<br>

---

## 7.2 for in 루프
ES6에서 새로 도입된 루프는 아니지만, for in 루프를 살펴보고 for of 루프와 다른 점을 이해해보자.

for in 루프는 순서 없이 객체의 모든 열거 가능한 속성을 반복하기 때문에 for of 루프와 약간 다르다.

따라서 반복 중에는 객체의 속성을 추가, 수정, 삭제하지 않는 것이 좋다.

반복 중에 해당 속성을 거칠 것이라는 보장이 없고, 수정 전이나 수정 후에 거칠 것이라는 보장도 없기 때문이다.

```
const car = {
    maker: "BMW",
    color: "red",
    year: "2010",
};

for (const prop in car) {
    console.log(prop, car[prop]);
}
// maker BMW
// color red
// year 2010
```

<br>

---

## 7.3 for of와 for in의 차이
```
let list = [4, 5, 6];

// for ...in은 키의 목록을 반환한다
for (let i in list) {
    console.log(i);     // "0", "1", "2"
}

// for ...of는 값을 반환한다.
for (let i of list) {
    console.log(i);     // 4, 5, 6
}
```

<strong>
for in은 배열의 속성 목록을 반환하는 반면,

for of는 배열의 원소 목록을 반환한다.
</strong>