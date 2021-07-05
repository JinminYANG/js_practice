# 템플릿 리터럴 

ES6 이전에는 템플릿 문자열이라고 부르던 것을 ES6부터는 템플릿 리터럴이라고 부르게 되었다.

ES6에서 문자열을 삽입하는 방식을 살펴보자.

## 4.1 문자열 삽입

ES5
```
var name = "Jinmin";
var greeting = "Hello my name is " + name;

console.log(greeting);
// Hello my name is Jinmin
```

ES6 백틱(`) 사용
```
let name = "Jinmin";
const greeting = `Hello my name is ${name}`;

console.log(greeting);
// Hello my name is Jinmin
```

<br>

---

## 4.2 표현식 삽입

ES5
```
var a = 1;
var b = 10;

console.log('1 * 10 is ' + (a * b));
// 1 * 10 is 10
```

ES6 백틱(`) 사용
```
var a = 1;
var b = 10;

console.log(`1 * 10 is ${a * 10}`);
// 1 * 10 is 10
```

<br>

---

## 4.3 여러 줄 문자열 생성

ES5에서는 HTML 프래그먼트 등에 사용할 여러 줄로 이뤄진 문자열을 백슬래시(\)를 이용하여 구현했다.
```
var text = "hello, \
my name us Jinmin \
how are you?\ ";
```

ES6 백틱(`) 사용
```
var text = `hello, 
my name is Jinmin
how are you?`;
```

## 4.4 중첩 템플릿

```
const people = [{
    name: 'Jinmin',
    age: 27,
}, {
    name: 'Yang',
    age: 26,
}, {
    name: 'Josh',
    age: 28,
}];

const markup = `
    <ul>
        ${people.map(person => `<li> ${person.name} </li>`)}
    </ul>
`;

console.log(markup);
// <ul>
// <li> Jinmin </li>, <li> Yang </li>, <li> Josh </li>
// </ul>
```

map 함수를 사용하여 people의 각 원소에 대해 반복 동작을 수행하고 people 내에 있는 name을 담아 li 태그를 표시했다.

<br>

---

## 4.5 삼항 연산자 추가하기

삼항 연산자를 사용하면 템플릿 리터럴 내에 로직을 쉽게 추가할 수 있다.

```
const isDiscounted = false;

function getPrice() {
    console.log(isDiscounted ? "$10" : "$20");
}

getPrice();
// $20
```

? 앞의 조건이 true이면 첫 번째 값이 반환, false이면 뒤에 있는 값이 반환

```
const artist = {
    name: "Bon Jovi",
    age: 56,
};

const text = `
    <div>
        <p> ${artist.name} is ${artist.age} years old ${artist.song ? `and worte the song ${artist.song}` : ''}
        </p>
    </div>
`;
// <div>
//  <p> Bon Jovi is 56 years old
//  </p>
// </div>

const artist = {
    name: "Trent Reznor",
    age: 53,
    song: 'Hurt',
};
// <div>
//  <p> Trent Reznor is 53 years old and wrote the song Hurt
//  </p>
// </div>
```

## 4.6 템플릿 리터럴에 함수 전달하기

필요하면 템플릿 리터럴 내에 함수를 전달할 수 도 있다.

```
const groceries = {
    meat: "pork chop",
    veggie: "salad",
    fruit: "apple",
    others: ['mushrooms', 'instant noodles', 'instant soup'],
};

function groceryList(others) {
    return `
        <p>
            ${others.map( other => `<span>${other}</span>`).join('\n')}
        </p>
    `;
}

const markup = `
    <div>
        <p>${groceries.meat}</p>
        <p>${groceries.veggie}</p>
        <p>${groceries.fruit}</p>
        <p>${groceryList(groceries.others)}</p>
    </div>
`;

// <div>
//  <p>pork chop</p>
//  <p>salad</p>
//  <p>apple</p>
//  <p>
//      <span>mushrooms</span>
//      <span>instant noodles</span>
//      <span>instant soup</span>
//  </p>
// </div>
```

마지막 p 태그에서 함수 groceryList를 호출하여 다른 모든 others를 인수로 전달했다.

함수 내에서 p 태그를 반환하고 map을 이용하여 groceries의 각 원소에 대해 반복하여 각 원소를 담은 span 태그 배열을 반환했다. 

.join('\n')을 사용하여 각 span 뒤에 새 행을 추가했다.

<br>

---

## 4.7 태그된 템플릿 리터럴

함수를 태그하여 템플릿 리터럴을 실행하면 템플릿 내부에 있는 모든 항목이 태그된 함수의 인수로 제공된다.

함수 이름을 가져다 실행할 템플릿 앞에 쓰기만 하면 된다.

```
let person = "Jinmin";
let age = 27;

function myTag(strings, personName, personAge) {
    let str = strings[1];
    let ageStr;

    personAge > 50 ? ageStr = "grandpa" : ageStr = "youngster";

    return personName + str + ageStr;
}

let sentence = myTag`That ${person} is a ${age}!`;
console.log(sentence);
// Jinmin is a youngster
```

age 변수의 값을 받아서 삼항 연산자를 사용하여 출력할 항목을 결정한다.

함수에서 첫 번째 인수 strings는 let sentence 문의 전체 문자열 중 템플릿 리터럴 변수를 제외한 문자열 들이 담긴 배열로 설정되고, 템플릿 리터럴 변수들이 나머지 인수가 된다.

strings 배열의 각 원소는 템플릿 리터럴에 포함된 변수들을 구분자로 삼아 문자열을 나눈 결과와 같다.

문자열은 That, ${person}, is a, ${age}, !

변수를 제외한 ["That ", " is a ", "!"]가 strings가 된다.