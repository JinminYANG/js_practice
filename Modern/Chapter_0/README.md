# 자바스트립트 기초

HTML 페이지에 자바스크립트를 삽입하는 방식은 2가지 이다.
 - script 태그를 사용하고 그 안에 자바스크립트 코드를 직접 삽입
```
<script type="text/javascript"> [CODE] </script>
```

 - 외부 파일을 참조하여 삽입
 ```
 <script src="/home/script.js"></script>
 ```

<strong>script 태그안에 코드를 작성하기보다는, 파일에 넣어서 브라우저가 가져오는 파일 수에 관계없이 한 번에 다운로드하고 캐시하게 하는 것이 좋다.</strong>

<br>

---

## 0.1 변수

변수는 값을 담기 위한 공간
```
var username = "Jinmin";
let username = "Jinmin";
const username = "Jinmin";
```

<strong>var과 let는 재할당할 수 있다.</strong>

<br>

### 변수 명명법
 - 변수는 숫자로 시작할 수 없다.
 - 변수 명에는 공백, 기호, 마침표가 들어갈 수 없다.

 <strong>
 변수 이름 자체가 변수를 설명할 수 있게 하는 방식이 좋다.
 
 <br>

 두문자어, 약어, 의미없는 이름은 사용금지
 </strong>

 ```
 // camelCase
 let lastLoggedIn = '';

 // snake_case
 let last_Logged_in = '';
 ```

<br>

---

 ## 0.2 자료형
 자바스크립트는 동적 언어이다. 

 정적 언어와 달리 변수를 정의할 때 자료형을 정의할 필요가 없다.


<strong>처음에는 편리해 보이지만 대규모 프로젝트에서 작업할 때는 문제의 원인이 될 수 있다.</strong>

<br>

### 원시 자료형
 - string : 문자열
 - number : 숫자
 - boolean : 불리언
 - null : 널
 - undefined : 정의되지 않음
 - symbol : 심벌 (ES6)

 symbol은 고유하고 변경할 수 없는 값을 나타낸다. 

<br>

### 객체
```
const car = {
    wheels : 4,
    color : "red",
};
```

각 속성에는 키와 값이 있다.

키의 자료형은 string 자료형이지만 값은 모든 자료형이 될 수 있으며, 함수가 될 수 있다.

```
const car = {
    wheels : 4,
    color : "red",
    drive: function(){
        console.log("wroom wroom");
    },
};

car.drive();
```
이와 같이 객체에서 함수를 호출할 수도 있다.

<br>

빈 객체 생성
```
const car = new Object();
const car = {}; // 일반적 사용 (객체 리터럴)
```

<br>

속성 추가
```
car.color = 'red';
console.log(car);
// {color: "red"};
```

<br>

<strong>객체 속성 접근법</strong>
```
const car = {
    wheels : 4,
    color : "red",
}

console.log(car.wheels);    // 점 표기법
// 4
console.log(car['color']);  // 대괄호 표기법
// red
```

<br>

<strong>객체의 복사</strong>

객체를 복사할 때는 참조방식이 쓰인다.

```
let car = {
    color : "red",
};

let secondCar = car;
```
여기서 secondCar는 그 자체로 객체가 아니라 car에 대한 참조, 즉 <strong>주소</strong>를 저장한다.

<br>

자바스크립트에서 객체의 복사본을 만드는 빠른 방법 중 하나는 Object.assign()을 사용하는 방법이다.
```
const car = {
    color: 'red',
};
const secondCar = Object.assign({}, car);
car.wheels = 4;

console.log(car);
// {color: 'red', wheels: 4}

console.log(secondCar);
// {color: 'red'}
```
Object.assign()을 이용하여 car를 업데이트해도 secondCar에는 영향을 주지 않는다.
Object.assign()의 첫 번째 인수는 복사본에 해당하는 객체이고,
두 번째 인수는 원본에 해당하는 객체이다.

<br>

### 배열

배열은 순서대로 값을 저장하는 객체이다.
항목으로 이루어진 목록만 저장할 때 사용한다.
```
const fruitBasket = ['apple', 'banana', 'orange'];
```
배열의 각 항목의 값에 접근할 때는 인덱스를 사용하면 된다.
배열의 인덱스는 0부터 시작한다.

<br>

---

## 0.3 함수

함수는 계산과 작업을 수행하는 데 쓰이는 매우 중요한 도구이다.

기본적인 함수 정의
```
function greet(name){
    console.log("hello" + name);
}

greet("Jinmin");
// hello Jinmin
```

<strong>원시 자료형이 함수에 전달될 때는 참조가 아니라 값의 형태로 전달된다.</strong>

<strong>객체나 배열을 함수에 전달할 때는 참조로 전달된다.<br>
즉, 해당 값에 대한 수정사항이 원래의 객체에 반영된다.</strong>

<br>

함수 표현식
```
const greeter = function greet(name){
    console.log("hello" + name);
}

greeter("Jinmin");
// hello Jinmin
```

익명 함수
```
const greeter = function(name){
    console.log("hello" + name);
}

greeter("Jinmin");
// hello Jinmin
```

화살표 함수
```
const greeter => (name){
    console.log("hello" + name);
}

greeter("Jinmin");
// hello Jinmin
```

<br>

---

## 0.4 함수 스코프와 this 키워드의 이해

스코프

- 전역 스코프를 가지는 변수는 코드의 어느 곳에서나 접근할 수 있다.
- 블록 스코프를 가지는 변수는 변수가 선언된 코드 블록 내부에서만 접근할 수 있다.

여기에서 블록은 함수, 루프, 중괄호({})로 구분되는 모든 영역을 의미한다.

<br>

### var
```
var myInt = 1;

if (myInt === 1){
    var mySecondInt = 2;
    console.log(mySecondInt);
    // 2
}
console.log(mySecondInt);
// 2
```

이와 같이 var 키워드로 선언된 변수는 블록 스코프를 가지지 않기 때문에 블록 외부에서도 값에 접근할 수 있다.

### let
```
var myInt = 1;

if (myInt === 1){
    let mySecondInt = 2;
    console.log(mySecondInt);
    // 2
}
console.log(mySecondInt);
// ReferenceError
```
let 키워드로 선언된 변수는 블록 스코프 외부에서 변수에 접근할 수 없으며, 접근을 시도하면 'mySecondInt is not defined' 오류가 발생한다.

let 또는 const로 선언된 변수는 변수가 선언된 위치에 해당하는 블록 스코프를 가지게 된다.

<br>

### this

```
const myCar = {
    color = 'red',
    logColor: function(){
        console.log(this.color);
    },
};

myCar.logColor();
// red
```

이 예에서 this 키워드가 myCar 개체를 참조한다는 것은 자명하다.

this의 값은 함수가 호출되는 방식에 따라 다르다. 앞의 예에서 함수는 객체의 메소드로 호출되었다.

<br>

```
function logThis(){
    console.log(this);
}

logThis();
// Window {...}
```

이 함수는 전역 범위에서 호출했으므로 this 값은 Window 객체를 참조한다.

'use strict'를 이용하여 스트릭트 모드를 설정하면 Window 객체를 참조하는 것을 방지할 수 있다.

<br>

this의 값을 수동으로 설정하고자 할 때는 .bind()를 사용할 수 있다.
```
const myCar = {
    color: 'red',
    logColor: function(){
        console.log(this.color);
    },
};

const unboundGetColor = myCar.logColor;
console.log(unboundGetColor);
// undefined

const boundGetColor = unboundGetColor.bind(myCar);
console.log(boundGetColor());
// red
```

this 키워드의 값을 설정할 수 있는 또 다른 방법 

.call() 
```
function Car(maker, color){
    this.carMaker = maker;
    this.carColor = color;
}

function MyCar(maker, color){
    Car.call(this, maker, color);
    this.age = 5;
}

const myNewCar = new MyCar('bmw', 'red');
console.log(myNewCar.carMaker);
// bmw
console.log(myNewCar.carColor);
// red
```

.call()에 MyCar 객체를 전달하여 this.carMaker가 MyCar의 인수로 전달한 maker로 설정되도록 했다.

.apply()
```
function Car(maker, color){
    this.carMaker = maker;
    this.carColor = color;
}

function MyCar(maker, color){
    Car.apply(this, [maker, color]);
    this.age = 5;
}

const myNewCar = new MyCar('bmw', 'red');
console.log(myNewCar.carMaker);
// bmw
console.log(myNewCar.carColor);
// red
```

.apply()는 인수 목록이 담긴 배열을 받는다.

함수에 필요한 인수의 수를 모르거나 알 필요가 없을 때는 .apply()를 주로 사용한다.

.call()은 인수를 개별적으로 전달해야 하므로 사용할 수 없다.

.apply()는 배열을 전달할 수 있고, 배열에 포함된 원소의 수에 관계없이 함수 내부로 전달할 수 있다.

```
const ourFunction = function(item, method, args){
    method.apply(args);
}

ourFunction(item, method, ['argument1', 'argument2']);
ourFunction(item, method, ['argument1', 'argument2', 'argument3']);
```

이런 예와 같이, 전달하는 인수의 수에 관계없이 .apply()가 호출될 때 개별적으로 각 인수가 적용된다.