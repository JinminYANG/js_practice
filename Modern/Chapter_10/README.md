# 객체 리터럴의 업그레이드

## 10.1 변수를 키와 값으로 하는 객체 만들기

```
const name = "Jinmin";
const surname = "YANG";
const age = 27;
const nationality = "Korean";
```

이 코드를 이용하여 객체 리터럴을 만들고 싶다면 일반적인 방식은
```
const person = {
    name: name,
    surname: surname,
    age: age,
    nationality = nationality,
};

console.log(person);
// {name: "Jinmin", surname: "YANG", age: 27, nationality: "Korean"}
```

ES6에서는 단순화할 수 있다.
```
const person = {
    name,
    surname,
    age,
    nationality,
};

console.log(name);
// {name: "Jinmin", surname: "YANG", age: 27, nationality: "Korean"}
```

변수들의 이름이 코드 내의 속성과 동일하기 때문에, 코드 내에서 굳이 두번 씩 표기하지 않아도 된다.

<br>

---

## 10.2 객체에 함수 추가하기

ES5
```
const person = {
    name: "Jinmin",
    greet: function() {
        console.log("Hello");
    },
};

person.greet();
// Hello
```

ES6
```
const person = {
    name: "Jinmin",
    greet() {
        console.log("Hello");
    },
};

person.greet();
// Hello
```

function 키워드가 없고, 코드는 더 짧아졌지만 동일한 동작을 수행한다.

```
const person1 = {
    () => console.log("Hello"),
};
// person1은 동작하지 않는다. 함수에 접근하기 위한 키가 필요하다.

const person2 = {
    greet: () => console.log("Hello");
};

person2.greet();
// Hello
```

<br>

---

## 10.3 객체의 속성을 동적으로 정의하기

ES5
```
var name = "myname";
var person = {};
person[name] = "Jinmin";

console.log(person.myname);
// Jinmin
```
ES5에서는 객체를 먼저 생성한 후 수정을 해야했다.

ES6
```
const name = "myname";
const person = {
    [name]: "Jinmin",
};

console.log(person.myname);
// Jinmin
```