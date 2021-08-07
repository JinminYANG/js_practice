# 타입스크립트 기초

타입스크립트가 자바스크립트 개발자에게 필수적인 기술은 아니지만, 대규모 프로젝트 팀으로 작업하는 경우 매우 유용하다.

자바스크립트는 `강타입 언어`가 아니므로 변수 선언 시 자료형을 정의할 필요가 없다.

이 때문에 더 유연하고 다른 자료형의 값도 수용할 수 있는 반면, 코드가 더 혼란스러워지고 버그가 발생하기도 쉬워진다.

```
function getUserByID(userID) {
    // 사용자 id를 이용하여 사용자 정보 조회 api 호출
}
```

userID는 정수일까, 문자열일까? 정수라고 가정할 수 있지만 문자열(ex: 'A123')일 수도 있다.

그 코드를 일부라도 작성하지 않는 한, 인수의 자료형이 무엇인지 알 방법이 없다.

하지만 타입스크립트를 사용한다면 동일한 코드를 다음과 같이 작성할 수 있다.

```
function getUserByID(userID: number) {
    // 사용자 id를 이용하여 사용자 정보 조회 api 호출    
}
```

이 코드에서는 자바스크립트와는 달리 인수가 숫자 자료형인 것을 알 수 있고, 문자열을 전달하면 오류가 발생하게 된다.

간단히 자료형을 명시하는 것만으로 코드가 더 명확해졌다.

<br>

---

## 23.1 타입스크립트란?

불과 몇 년전에 마이크로소프트에서 만든 타입스크립트는 자료형을 명시하는 방식을 지원하고 일반 자바스크립트로 컴파일된다.

자료형이 있는 자바스크립트 상위집합(superset)이라고 볼 수 있다.

상위집합이라는 뜻은 타입스크립트 파일에 일반 자바스크립트를 작성해도 되며 오류가 발생하지 않음을 의미한다.

브라우저는 타입스크립트를 이해하지 못하기 때문에 일반 자바스크립트로 트랜스파일(transpile) 해야 한다.

<br>

---

## 23.2 타입스크립트 사용 방법

타입스크립트 설치 

```
npm install -g typescript
```

<br>

greeter.ts
```
const greeter = (name: string) => {
    console.log(`hello ${name}`);
}

greeter('Alberto');
```

타입스크립트 파일로부터 자바스크립트 파일을 생성하려면 해당 파일과 같은 디렉토리의 터미널에서 다음 명령을 실행한다.

```
tsc greeter.ts
```

위 명령의 결과로 greeter.js 파일이 생성될 것이다.

```
// greeter.js

var greeter = function (name) {
    console.log("hello " + name);
};
greeter('Alberto');
```

name: string 코드는 트랜스파일 후에 어떻게 변했을까?

자바스크립트는 강타입 언어가 아니므로 트랜스파일 과정에서 자료형 선언이 제거된 것을 볼 수있다.

이렇게 자료형을 명시하면 디버그하고 오류를 줄이는 데 도움이 된다.

또한 최종적으로는 동일한 자바스크립트 코드가 생성됨을 알 수 있다.

<br>

---

## 23.3 타입스크립트 기본 자료형

타입스크립트에서 지원하는 기본 자료형은 다음과 같다.

- boolean
- number
- string
- Array
- object
- 튜플
- enum
- any
- void
- null / undefined
- never

<br>

### boolean

```
const active: boolean = true;
```

<br>

### number

10진, 16진, 2진, 8진 리터럴을 지원한다.

```
const decimal: number = 9;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;
```

<br>

### string

```
const message: string = "Welcome";
```

<br>

### Array

```
// type[]
const firstArray: number[] = [1, 2, 3];

// Array<type>
const secondArray: Array<number> = [4, 5, 6];
```

간단한 경우에는 두 가지 방법이 차이가 없지만 숫자 자료형보다 더 복잡한 자료형이 사용될 경우 첫 번째 표기법은 사용될 수 없다.

```
// label, value 속성을 가진 객체의 배열을 인수로 받는 함수
function example(arg: Array<{label: string, value: string}>) {
    // 코드
}
```

Array<{label: string, value: string}>은 인수가 label, value 속성을 가진 객체의 배열임을 의미한다.

<br>

### object

타입스크립트의 객체 object는 원시 자료형이 아닌 모든 자료형 값을 가리킨다.

여러 속성을 포함할 수 있으며 속성 값은 원시 자료형, 객체, 함수 등이 될 수 있다.

<br>

어떤 함수의 인수가 객체 자료형을 받는다고 가정해보자.

```
function greetUser(user: object) {
    // name 속성이 object 자료형에는 정의되어 있지 않음
    console.log(`hello ${user.name}`);
}

greetUser({name: 'Alberto', age: 27});
```

타입스크립트 컴파일러는 접근하려는 속성 이름이 object 자료형에 존재하지 않는다고 오류를 발생시킨다.

이 문제를 해결하기 위해 해당 객체의 속성을 더 자세히 정의해보자.

```
function greetUser(user: {name: string, age: number}) {
    console.log(`hello ${user.name}`);
}

greetUser({name: 'Alberto', age: 27});
// hello Alberto
```

객체의 모든 속성을 명시적으로 지정한 덕분에 코드를 보는 모든 사람이 해당 객체로 무엇을 할 수 있고, 무엇을 할 수 없는지 쉽게 알 수 있다.

<br>

### 튜플

튜플(tuple)을 사용하면 배열의 원소에 자료형을 정의할 수 있다.

```
let myTuple: [string, number, string];
myTuple = ['hi', 5, 'hello'];

console.log(myTuple);
// ['hi', 5, 'hello']
```

타입스크립트는 튜플에 정의된 인덱스의 자료형을 알고 있지만, 배열에 새롭게 추가되는 원소의 자료형을 알 수 없다.

<br>

### enum

열거형 enum을 이용하면 숫자 집합에 이름을 부여할 수 있다.

```
enum Status {deleted, pending, active};

const blogPostStatus: Status = Status.active;

console.log(blogPostStatus);
// 2
```

열거형 내부의 값은 0부터 시작하므로 deleted: 0, pending: 1, active: 2 이다.

이러한 코드에서는 블로그 게시물의 상태를 표현할 때 2가 아닌 active라고 말하는 것이 훨씬 더 가독성이 좋다.

시작 값을 지정하여 열거 자료형이 숫자를 원하는 값부터 할당할 수도 있다.

```
enum Status {deleted = -1, pending, active};

const blogPostStatus: Status = Status.active;

console.log(blogPostStatus);
// 1
```

deleted: -1, pending: 0, active: 1이 된다.

숫자를 이용하여 열거 자료형의 값에 접근할 수 도 있다.

```
enum Status {deleted = -1, pending, active};
console.log(Status[0]);
// pending
```

<br>

### any

any는 특정 변수의 값이 무엇이든 될 수 있음을 의미한다.

서드 파티 라이브러리가 타입스크립트를 지원하지 않는 경우, 자바스크립트에서 기존 코드들을 활용하면서 부분적으로 타입스크립트를 적용할 때 사용할 수 있다.

any는 존재하지 않을 수도 있는 속성과 메서드에 접근할 수 있도록 허용한다.

자료형의 일부만 알고 있는 경우에도 any를 사용할 수 있다.

```
let firstUser: Object<any> = {
    name: 'Alberto',
    age: 27,
};

let secondUser: Object<any> = {
    name: 'Jinmin',
};
```

두 변수 모두 object 자료형이 될 것으로 예상되지만, 그 속성이 확실하지 않으므로 any를 사용했다.

<br>

### void

void는 자료형이 없음을 정의한다.

```
function storeValueInDatabase(objectToStore): void {
    // 데이터베이스에 값을 저장
}
```

이 함수는 객체를 받아서 데이터베이스에 저장하지만 아무것도 반환하지 않기 때문에 반환값을 void로 지정했다.

void 자료형의 변수를 선언할 때는 null과 undefined만 할당 가능하다.

<br>

### null / undefined

void와 마찬가지로 null / undefined 자료형의 변수를 만드는 것은 그다지 유용하지 않다.

<br>

### never

never는 절대 발생하지 않는 값이다.

예를 들어 반환을 아예 하지않거나 항상 오류를 발생기키는 함수에 사용할 수 있다.

```
function throwError(error: string): never {
    throw new Error(error);
}
```

이 함수는 오류만 발생시키며 값을 반환하지 않는다.

<br>

---

## 23.4 인터페이스와 클래스

### 인터페이스

앞 장의 예제에서 다음과 같이 자료형을 선언한 적이 있다.

```
Array<{label: string, value: string}>
```

하지만 변수의 형태가 훨씬 더 복잡해서 여러 곳에서 재사용해야 한다면?

`인터페이스(interface)`를 사용하면 해당 변수가 가져야 하는 형태를 정의할 수 있다.

```
interface Car {
    wheels: number;
    color: string;
    brand: string;
}
```

인터페이스는 객체가 아니라는 점에 주의하자.

인터페이스는 속성의 각 행 끝에 ,가 아닌 ;를 사용한다.

다음과 같이 선택적 속성(optional property)를 설정할 수 있다.

```
interface Car {
    wheels: number;
    color: string;
    brand: string;
    coupe?: boolean;
}
```

선택적 속성으로 만들기 위해서는 속성 이름 뒤에 ?를 붙이면 된다.

해당 속성 없이 새로운 Car 객체를 생성해도 타입스크립트는 오류를 발생시키지 않는다.

readonly 키워드를 사용하여 객체 생성 후 특정 속성을 편집할 수 없도록 하는 것도 가능하다.

```
interface Car {
    readonly wheels: number;
    color: string;
    brand: string;
    coupe?: boolean;
}
```

이렇게 Car 객체를 생성하면서 바퀴 수를 설정하고, 생성된 이후에는 변경할 수 없게 할 수 있다.

인터페이스를 사용하여 객체뿐만 아니라 함수의 형태도 정의할 수 있다.

```
interface Greet {
    (greeting: string, name: string): string
}

let greetingFunction: Greet;

greetingFunction = (greeting: string, name: string): string => {
    console.log(`${greeting} ${name}`);
    return `${greeting} ${name}`;
}

greetingFunction('Bye', 'Alberto');
```

함수가 가져야 할 형태를 인터페이스로 만든 후, 해당 인터페이스를 자료형으로 가지는 변수를 정의한다.

그 변수에 정해진 형태의 함수를 만들어 할당하면 된다.

다름 형태의 함수를 해당 변수에 할당하면 오류가 발생한다.

<br>

### 인터페이스 확장

인터페이스는 다른 인터페이스를 상속받을 수 있다.

```
interface Vehicle {
    wheels: number;
    color: string;
}

interface Airplane extends Vehicle {
    wings: number;
    rotors: number;
}
```

이 예에서 Airplane 인터페이스는 새롭게 정의된 두 가지 속성뿐 아니라 상속된 두 가지 속성을 포함하여 총 네가지 속성을 가진다.

<br>

### 클래스

타입스크립트에서 클래스는 ES6의 클래스와 매우 유사하다.

프로토타입 상속을 수행하여 애플리케이션에서 재사용할 수 있는 구성 요소를 만들 수 있다.

```
class Animal {
    eat = () => {
        console.log('gnam gnam');
    };
    sleep = () => {
        console.log('zzz');
    };
}

class Human extends Animal {
    work = () => {
        console.log('zzzzzzz');
    };
}

const me = new Human;
me.work;
// zzzzzzz
me.eat();
// gnam gnam
me.sleep();
// zzz
```

두 개의 클래스를 만들었으며, 두 번째 클래스는 첫 번째 클래스에서 두 가지 메서드를 상속받는다.

ES6 클래스와의 차이점은 타입스크립트를 사용하면 애플리케이션에서 클래스 멤버에 접근하는 권한을 설정할 수 있다는 점이다.

어디서나 접근할 수 있도록 하려면 public 키워드를 사용한다.

```
class Animal {
    public eat = () => {
        console.log('gnam gnam');
    };
    public sleep = () => {
        console.log('zzz');
    };
}

const dog = new Animal();
dog.eat();
// gnam gnam
```

자바스크립트에서 모든 클래스 멤버는 공개되기 때문에 접근을 제한할 수 없다.

하지만 타입스크립트는 private를 이용하여 멤버를 비공개로 지정하여 클래스 외부에서 접근할 수 없게 할 수 있다.

```
class Animal {
    public eat = () => {
        console.log('gnam gnam');
    };
    public sleep = () => {
        console.log('zzz');
    };
}

class Human extends Animal {
    private work = () => {
        console.log('zzzzzzz');
    };
}

const me = new Human;
me.work();
// Property 'work' is private and only accessible within class 'Human'.
```

또한 멤버에 protected 키워드를 적용하면 해당 클래스와 클래스를 상속받은 클래스 내에서만 접근할 수 있다.

```
class Human {
    protected work = () => {
        console.log('zzzzzzz');
    };
}

class Adult extends Human {
    public doWork = () => {
        console.log(this.work);
    };
}
```

Adult 클래스는 Human 클래스를 확장하므로 protected 메서드에 접근할 수 있다.

<br>

---

## 23.5 유니언 자료형과 인터섹션 자료형

### 유니언 자료형

```
const attendee = string | string[];
```

이 변수는 문자열일 수도 있고, 문자열 배열일 수도 있다.

이렇게 정의하는 방식을 `유니언 자료형(union type)`이라고 한다.

```
const identifier = string | number | string[];
```

파이프(|) 기호를 사용하여 각 자료형을 구분한다.

모든 자료형 유니언의 공통 속성에만 접근할 수 있음을 기억하자.

```
interface Kid {
    age: number;
}

interface Adult {
    age: number;
    job: string;
}

function person(): Kid | Adult {
    return {age: 27};
}

const me = person();
me.age;     // ok
me.job;     // Property 'job' does not exist on type 'Kid'.
```

job 속성은 Adult 인터페이스에만 존재하고 Kid 인터페이스에는 존재하지 않으므로, 둘의 유니언 자료형에서는 접근할 수 없다.

<br>

### 인터섹선 자료형

`인터섹션 자료형(intersection type)`을 사용하면 여러 자료형을 결합할 수 있다.

```
interface Person {
    sex: 'male' | 'female', | 'N/A';
    age: number;
}

interface Employee {
    job: string;
}

type Adult = Person & Employee;

const me: Adult = {
    sex: 'male',
    age: 27,
    job: 'software developer',
};

console.log(me);
// { sex: 'male', age: 27, job: 'software developer' }
```

Person과 Employee라는 두 가지 자료형이 있을 때 이 둘을 결합하여 Adult 자료형을 만들었다.

두 인터페이스가 각각 자료형은 다르지만 동일한 이름의 속성을 가지고 있으면 두 인터페이스를 결합할 때 컴파일러에서 오류가 발생하므로 주의하자.