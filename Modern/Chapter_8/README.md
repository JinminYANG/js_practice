# 배열 메서드

## 8.1 Array.from()

Array.from()은 배열스러운, 즉 배열처럼 보이지만 배열이 아닌 객체를 받아서 실제 배열로 변환해 반환한다.

```
const fruits = document.querySelectorAll(".fruits p");

// fruits를 배열로 변환
const fruitArray = Array.from(fruits);
console.log(fruitArray);
// [p, p, p]

// 배열을 취급하므로 map() 함수 사용
const fruitNames = fruitArray.map(fruit => fruit.textContent);
console.log(fruitNames);
// ["Apple", "Banana", "Orange"]
```

단순화
```
const fruits = Array.from(document.querySelectorAll(".fruits p"));
const fruitNames = fruits.map(fruit => fruit.textContent);
console.log(fruitNames);
// ["Apple", "Banana", "Orange"]
```

fruits를 배열로 변환했다.

따라서 map 등 배열이 제공하는 모든 메서드를 사용할 수 있는 상태가 되었다.

전체 태그가 아닌 p 태그의 textContent만 새로운 배열로 만들었다.

```
const fruits = document.querySelectorAll(".fruits p");
const fruitArray = Array.from(fruits, fruit => {
    console.log(fruit);
    // <p> Apple </p>
    // <p> Banana </p>
    // <p> Orange </p>

    return fruit.textContent;
    // 태그 자체는 제외하고 태그 안의 텍스트 내용만 얻고자 한다.
});

console.log(fruitArray);
// ["Apple", "Banana", "Orange"]
```

Array.from()의 두 번째 인수를 이용해서 배열에 map 함수를 적용헌 것과 동일한 기능을 하는 코드를 작성할 수도 있다.

이 예시에서는 map 역할을 하는 함수를 .from() 메서드의 두 번째 인수에 전달하여 동일한 결과를 얻었다.

<br>

---

## 8.2 Array.of()

Array.of()는 전달받은 모든 인수로 배열을 생성한다.

```
const digits = Array.of(1, 2, 3, 4 ,5);
console.log(digits);
// [1, 2, 3, 4 ,5]
```

<br>

---

## 8.3 Array.find()

Array.find()는 제공된 테스트 함수를 충족하는 배열의 첫 번째 원소를 반환한다.

충족하는 원소가 없으면 undefined를 반환한다.

Array.find()의 동작
```
const array = [1, 2, 3, 4, 5];

let found = array.find(e => e > 3);
console.log(found);
// 4
```

`조건 (e > 3)과 일치하는 첫 번째 원소를 반환하므로 4를 반환한다.`

<br>

---

## 8.4 Array.findIndex()

Array.findIndex()는 조건과 일치하는 첫 번째 원소의 인덱스를 반환한다.

```
const greetings = ["Hello", "hi", "byebye", "goodbye", "hi"];

let foundIndex = greetings.findIndex(e => e === "hi");
console.log(foundIndex);
// 1
```

<br>

---
## 8.5 Array.some() / Array.every()

.some()은 조건과 일치하는 원소가 있는지 검색하고 첫 번째 일치하는 원소를 찾으면 바로 중지한다.

.every는 모든 원소가 주어진 조건과 일치하는지 여부를 확인한다.

```
const array = [1, 2, 3, 4, 5, 6, 1, 2, 3, 1];

let arraySome = array.some(e => e > 2);
console.log(arraySome);
// true

let arrayEvery = array.every(e => e > 2);
console.log(arrayEvery);
// false
```

.some()은 2보다 큰 원소가 일부 있기 때문에 true지만,

.every()는 모든 원소가 2보다 크지는 않기 때문에 false이다.