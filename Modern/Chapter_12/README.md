# 클래스

`클래스는 일차적으로 자바스크립트의 기존 프로토타입 기반 상속에 대한 문법적 설탕이다.`

`클래스 문법이 자바스크립트에 새로운 객체 지향 상속 모델을 도입하는 것은 아니다.`

프로토타입 상속
```
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
}

const alberto = new Person("Alberto", 26);
const jinmin = new Person("Jinmin", 27);

alberto.greet();
// Hello, my name is Alberto
jinmin.greet();
// Hello, my name is Jinmin
```

Person의 프로토타입에 새 메서드를 추가해서 Person 객체의 인스턴스들이 접근할 수 있도록 만들었다.

<br>

---

## 12.1 클래스 생성

```
// 클래스 선언
class Person {

}

// 클래스 표현식
const person = class Person {

};
```

`클래스 선언 및 클래스 표현식은 호이스팅되지 않는다.`

클래스에 접근하기 전에 클래스를 선언하지 않으면 ReferenceError가 발생한다.

생성자 메서드를 추가한 것을 제외하면 프로토타입 방식과 클래스 방식은 큰 차이가 없다.

(생성자를 하나만 추가해야 함에 주의하자. 클래스에 생성자 메서드가 두 개 이상 포함된 경우 SyntaxError가 발생한다.)

```
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
    }
    farewell() {
        console.log("goodbye friend");
    }
}

const jinmin = new Person("Jinmin", 27);

jinmin.greet();
// Hi, my name is Jinmin and I'm 27 years old

jinmin.farewell();
// goodbye friend
```

<br>

---

## 12.2 정적 메서드

앞의 예시에서 greet()와 farewell() 메서드는 Person 클래스의 모든 인스턴스에서 접근할 수 있지만, Array.of()처럼 클래스의 인스턴스가 아닌 클래스 자체에서 접근할 수 있는 정적 메서드는 다음과 같이 정의할 수 있다.

```
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static info() {
        console.log("I am a Person class, nice to meet you");
    }
}

const jinmin = new Person("Jinmin", 27);

jinmin.info();
// TypeError: jinmin.info is not a function

Person.info();
// I am a Person class, nice to meet you
```

<br>

---

## 12.3 set와 get

setter 및 getter 메서드를 사용하여 클래스 내의 값을 설정하거나 가져올 수 있다.
```
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
        this.nickname = "";
    }

    set nicknames(vlaue) {
        this.nickname = value;
        console.log(this.nickname);
    }

    get nicknames(){
        console.log(`Your nickname is ${this.nickname}`);
    }
}

const jinmin = new Person("Jinmin", 27);

jinmin.nicknames = "zlnmln";
// "zlnmln"

jinmin.nicknames;
// "Your nickname is zlnmln"
```

<br>

---

## 12.4 클래스 상속하기

기존 클래스로부터 상속된 새로운 클래스를 만들려면 extends 키워드를 사용한다.

```
// 기존 클래스
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
    }
}

// 상속을 통해 만든 새 클래스
class Adult extends Person {
    constructor(name, age, work) {
        this.name = name;
        this.age = age;
        this.work = work;
    }
}

const jinmin = new Adult("Jinmin", 27, "software developer");
```

Person을 상속하는 Adult 클래스를 만들었지만 코드를 실행하면 오류가 발생한다.

```
ReferenceError: must call constructor before using :this: in Adult class constructor
```

오류 메세지는 새로운 클래스에서 this를 사용하기 전에 super()를 호출하라는 내용이다.

즉 Adult를 만들기에 앞서 Person을 만들어야 한다는 것이다.

생성자 내부에서 super()를 호출하면 Person이 만들어진다.

```
class Adult extends Person {
    constructor(name, age, work) {
        super(name, age);
        this.work = work;
    }
}
```

여기서 왜 super(name, age) 형태로 호출했을까

Adult 클래스는 Person으로부터 이름과 나이를 상속받기 때문에 Person을 다시 선언하고 초기화할 필요가 없다.

super() 생성자가 하는 일이 바로 이것이다.


수정된 코드
```
// 기존 클래스
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
    }
}

// 상속을 통해 만든 새 클래스
class Adult extends Person {
    constructor(name, age, work) {
        super(name, age);
        this.work = work;
    }
}

const jinmin = new Adult("Jinmin", 27, "software developer");

console.log(jinmin.age);
// 27
console.log(jinmin.work);
// software developer
jinmin.greet();
// Hi, my name is Jinmin and I'm 27 years old
```

Adult는 Person 클래스의 모든 속성과 메서드를 상속했음을 볼 수 있다.

<br>

---

## 12.5 배열 확장하기

배열과 비슷하게 생겼지만 첫 번째 값은 교실 이름이고 나머지는 학생 이름과 학생 점수를 나타내는 Classroom이라는 새로운 클래스를 만들어보자.

이 클래스는 다음과 같이 사용할 수 있어야 한다.
```
const myClass = new Classroom('1A', 
    {name: "Tim", mark: 6},
    {name: "Tom", mark: 3},
    {name: "Jim", mark: 8},
    {name: "Jon", mark: 10},
);
```

이러한 요구사항을 만족시키는 새로운 클래스는 다음과 같이 배열을 상속받아서 만들 수 있다.
```
class Classroom extends Array {
    // 레스트 연산자를 사용해 가변 인수로 입력받은 학생들의 정보를 배열 형태로 students에 전달
    constructor(name, ...students) {
        // 스프레드 연산자를 사용해 배열 원소들을 다시 풀어헤쳐 생성자를 호출한다.
        // 스프레드 연산자를 사용하지 않으면 '학생들의 정보가 들어있는 배열'을 원소로 가진 Array가 생성될 것이다.
        super(...students);
        this.name = name;
    }

    // 학생을 추가하기 위한 메서드 추가
    add(student) {
        this.push(student);
    }
}

const myClass = new Classroom('1A', 
    {name: "Tim", mark: 6},
    {name: "Tom", mark: 3},
    {name: "Jim", mark: 8},
    {name: "Jon", mark: 10},
);

// 새로운 학생 추가
myClass.add({name: "Timmy", mark: 7});
myClass[4];
// {name: "Timmy", mark: 7}

// for of 루프를 사용하여 반복 가능
for (const student of myClass) {
    console.log(student);
}

//  {name: "Tim", mark: 6}
//  {name: "Tom", mark: 3}
//  {name: "Jim", mark: 8}
//  {name: "Jon", mark: 10}
//  {name: "Timmy", mark: 7}
```