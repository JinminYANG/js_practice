# ES2017: 문자열 패딩, Object.entries(), Object.values() 등

## 18.1 문자열 패딩

문자열 끝 부분 또는 시작 부분에 패딩(padding)을 추가할 수 있다.

각각 padEnd()와 padStart()를 사용한다.

```
"hello".padStart(6);
// " hello"

"hello".padEnd(6);
// "hello "
```

여기서 패딩으로 6을 지정했는데 두 경우 모두 1개의 공간만 확보된 이유는 무엇일까

"hello"는 5글자이고 패딩은 6으로 지정되었기 때문에 빈 공간이 1개만 남게된다.

padStart()와 padEnd()는 결국 이 1개의 빈 공간을 채워넣게된다.

```
"hi".padStart(10);
// "        hi"

"welcome".padStart(10);
// "   welcome"
```

<br>

### padStart()와 오른쪽 정렬

문자열을 오른쪽 정렬하고 싶을 때 padStart()를 활용할 수 있다.

```
const strings = ["short", "medium length", "very long string"];

const longestString = strings.sort((x,y) => y.length - x.length).map(str => str.length)[0];

strings.forEach(str => console.log(str.padStart(lognestString)));

```

먼저 가장 긴 문자열을 찾아서 길이를 측정했다.

긴 문자열의 길이를 기준으로 모든 문자열에 padStart()를 적용하면 모든 문자열을 완벽하게 오른쪽 정렬할 수 있다.

<br>

### 패딩에 사용자 지정 값 추가

패딩은 공백을 추가하는 것뿐만 아니라 문자열이나 숫자를 덧붙이는 데에도 사용할 수 있다.

```
"hello".padEnd(13, " Alberto");
// "hello Alberto"

"1".padEnd(3, 0);
// "001"

"99".padEnd(3, 0);
// "099"
```

<br>

---

## 18.2 Object.entries() 와 Object.values()

객체 내부의 값에 쉽게 접근하는 방법도 도입되었다.

```
const family = {
    father: "Jonathan Kent",
    mother: "Martha Kent",
    son: "Clark Kent",
};
```

이전의 자바스크립트에서는 다음과 같은 방법으로 객체 내부에 접근했다.
```
Obejct.keys(family);
// ["father", "mother", "son"]

family.father;
// Jonathan Kent
```

즉, Object.keys()는 객체의 키만 반환하기 때문에, 값에 접근하기 위해서는 해당 키를 먼저 얻은 다음 그 키를 통해 값에 접근이 가능했다.

객체에 접근하는 방법이 두 가지 더 생겼다.

```
Object.values(family);
// ["Jonathan Kent", "Martha Kent", "Clark Kent"]

Object.entries(family);
// [
//  ["father", "Jonathan Kent"],
//  ["mother", "Martha Kent"],
//  ["son", "Clark Kent"]
// ]
```

Object.values()는 모든 값이 담긴 배열을 반환하고,

Object.entries()는 키와 값을 모두 포함하는 배열의 배열 (2차원 배열)을 반환한다.

<br>

---

## 18.3 Obejct.getOwnPropertyDescriptors()

이 메서드는 객체가 소유한 모든 속성 설명자를 반환한다.

속성의 value, writable, get, set, configurable, enumerable 등을 반환한다.

```
const myObj = {
    name: "Jinmin",
    age: 27,
    greet() {
        console.log("hello");
    },
};

Object.getOwnPropertyDescriptors(myObj);

/*
{
  name: {
    value: 'Jinmin',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 27, writable: true, enumerable: true, configurable: true },
  greet: {
    value: [Function: greet],
    writable: true,
    enumerable: true,
    configurable: true
  }
}
*/
```

<br>

---

## 18.4 후행 쉼표

후행 쉼표(trailing comma)는 사소한 문법 변경에 해당된다.

이제 객체나 함수를 작성할 때 마지막 매개변수인지 여부에 관계없이 각 매개변수 뒤에 쉼표를 찍는 것이 허용된다.

```
// 기존
const object = {
    prop1: "prop",
    prop2: "propop",
};

// 같이 개발하는 동료가 새로운 속성을 추가
const object = {
    prop1: "prop",
    prop2: "propop"
    prop3: "propopop"
};

// prop2에 후행 쉼표가 없었기 때문에
// 새 속성 prop3를 추가할 때 실수로 위와 같이 잘못된 코드를 작성할 가능성이 큼
```

<br>

---

## 18.5 어토믹스

자바스크립트는 기본적으로 웹 브라우저 위에서 단일 스레드로 동작하지만, HTML5 웹 워커(web worker) API 도입으로 백그라운드 스레드에서도 코드 실행이 가능해짐에 따라 멀티 스레드 환경을 지원하기 위해 공유 메모리 모델과 어토믹스(atomics)가 도입되었다.

`메모리가 공유되면 여러 스레드가 메모리에서 동일한 데이터를 읽고 쓸 수 있다.`

`Atomics를 이용한 작업은 이러한 환경에서도 정확하게 값을 읽고 쓸 수 있게 해준다.`

`또 Atomics를 이용한 작업은 다음 작업이 시작되기 전에 완료되고, 중단(interrupt)되지 않는 것이 보장된다.`

`Atomics는 생성자가 아니며 Atomics의 모든 속성과 메서드는 정적이므로 Atomics를 new 연산자와 함께 사용하거나 함수 형태로 호출할 수는 없다.` - MDN

Atomics의 메서드 중 일부는 다음과 같다.

- add / sub
- and / or / xor
- load / store

Atomics는 범용 고정 길이 바이너리 데이터 버터를 표현하는 SharedArrayBuffer 객체와 함께 사용된다.

### Atomics.add() , Atomics.sub(), Atomics.load(), Atomics.store()

Atomics.add()는 호출 시에 3개의 인수 즉 배열, 인덱스, 값을 인수로 받고 더하기를 수행하기 전에 해당 인덱스에 존재하던 이전 값을 반환한다.

```
// SharedArrayBuffer를 생성
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);

// 0번 인덱스에 값을 추가
uint8[0] = 10; 

console.log(Atomics.add(uint8, 0, 5));
// 10

console.log(uint8[0]);
// 15

console.log(Atomics.load(uint8, 0));
// 15
```

보다시피 Atomics.add()를 호출하면 해당 배열 인덱스에 존재하던 이전 값이 반환된다.

uint8[0]을 넣어 console.log()를 다시 호출하면 더하기를 수행한 결과인 15를 반환하는 것을 확인할 수 있다.

배열에서 특정 값을 가져오기 위해서는 Atomics.load()에 배열과 인덱스를 인수로 전달하면 된다.

Atomics.sub()는 Atomics.add()와 같은 방식으로 동작하지만 값을 뺀다.

```
// SharedArrayBuffer를 생성
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);

// 0번 인덱스에 값을 추가
uint8[0] = 10;

console.log(Atomics.sub(uint8, 0 , 5));
// 10

console.log(uint8[0]);
// 5

console.log(Atomics.store(uint8, 0 , 3));
// 3

console.log(Atomics.load(uint8, 0));
// 3
```

위 예제에서는 Atomics.sub()를 사용하여 uint8[0] 위치의 값에서 5를 뺐다 (10 - 5).

Atomics.add()와 마찬가지로 Atomics.sub() 메서드도 해당 인덱스의 이전 값(10)을 반환한다.

그런 다음 Atomics.store()를 사용하여 특정 값(3)을 배열의 특정 인덱스(첫 번째 위치인 0)에 저장했다.

Atomics.store()는 방금 전달한 값(3)을 반환한다.

끝으로 해당 인덱스에서 Atomics.load()를 호출하면 더 이상 5가 아닌 3이 표시된다.

<br>

### Atomics.and(), Atomics.or(), Atomics.xor()

이 세가지 메서드는 모두 배열의 지정된 위치에서 비트 AND, OR, XOR 연산을 수행한다.