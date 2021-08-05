# ES2019의 새로운 기능

## 21.1 Array.prototype.flat()과 Array.prototype.flatMap()

Array.prototype.flat()은 지정한 깊이까지 배열을 재귀적으로 평면화(flatten)한다.

깊이 인수가 지정되지 않으면 1이 기본값이다.

Infinity로 지정하면 모든 중첩 배열을 평면화할 수 있다.

```
const letters = ['a', 'b', ['c', 'd', ['e', 'f']]];

// 깊이 1 평면화
letters.flat();
// [ 'a', 'b', 'c', 'd', [ 'e', 'f' ] ]

// 깊이 2 평면화
letters.flat(2);
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// 깊이 1 평면화를 두 번 수행해도 동일한 결과
letters.flat().flat();
//[ 'a', 'b', 'c', 'd', 'e', 'f' ]

// 중첩된 배열이 모두 없어질 때까지 평면화
letters.flat(Infinity);
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
```

Array.prototype.flatMap()은 .flat()과 동일한 방식으로 깊이 인수를 처리 하지만 단순히 배열을 평면화하는 대신 새로운 값으로 매핑되어 생긴 배열을 평면화한다.

```
let greeting = ["Greetings from", " ", "Vietnam"];

// 일반 map() 함수 사용
greeting.map(x => x.split(" "));
// [ [ 'Greetings', 'from' ], [ '', '' ], [ 'Vietnam' ] ]

greeting.flatMap(x => x.split(" "));
// [ 'Greetings', 'from', '', '', 'Vietnam' ]
```

보다시피 .map()을 사용하면 배열 안에 배열이 중첩된 결과를 얻게 되지만 .flatMap()을 사용하면 이를 평면화할 수 있다.

<br>

---

## 21.2 Object.fromEntries();

Object.fromEntries()는 키/값 쌍이 포함된 배열을 객체로 변환한다.

```
const keyValueArray = [
    ['key1', 'value1'],
    ['key2', 'value2']
];

const obj = Object.fromEntries(keyValueArray);
console.log(obj);
// { key1: 'value1', key2: 'value2' }
```

배열, 맵 등의 이터러블 프로토콜을 구현하는 객체라면 무엇이든 Object.fromEntries()의 인수로 전달 가능하다.

<br>

---

## 21.3 String.prototype.trimStart()와 String.prototype.trimEnd()

trimStart()는 문자열 시작 부분의 공백을 제거하고 

trimEnd()는 문자열 끝 부분의 공백을 제거한다.

```
let str = "    this string has a lot of whitespace   ";

str.length;
// 42

str = str.trimStart();
// "this string has a lot of whitespace   "
str.length;
// 38

str = str.trimEnd();
// "this string has a lot of whitespace"
str.length;
// 35
```

trimStart()의 별칭으로 trimLeft()를,

trimEnd()의 별칭으로 trimRight()를 사용할 수도 있다.

<br>

---

## 21.4 선택적 catch 할당

ES2019 이전에는 catch 절에 항상 예외 변수를 포함해야 했다.

ES2019에서는 이를 생략할 수 있다.

```
// ES2019 이전
try {
    ...
} catch(error) {
    ...
}

// ES2019
try {
    ...
} catch {
    ...
}
```

이와 같은 문법은 오류를 무시하고자 할 때 유용하다.

<br>

---

## 21.5 Function.prototype.toString()

함수 객체의 .toString() 메서드는 함수의 소스 코드를 나타내는 문자열을 반환한다.

```
function sum(a ,b) {
    return a + b;
}

console.log(sum.toString());
// function sum(a ,b) {
//     return a + b;
// }
```

ES2016까지는 소스 코드에서 주석이나 공백 문자를 제거했지만, ES2019에서 개정되어 해당 문자열에는 주석 등도 포함된다.

```
function sum(a ,b) {
    // 합계를 구하는 함수
    return a + b;
}

console.log(sum.toString());

// function sum(a ,b) {
//     // 합계를 구하는 함수
//     return a + b;
// }
```

<br>

---

## 21.6 Symbol.prototype.description

심벌 객체의 description은 해당 심벌 객체의 설명을 반환한다.

```
const me = Symbol("Alberto");
me.description;
// Alberto

me.toString();
// Symbol(Alberto)
```