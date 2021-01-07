'use strict';

// Object
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };  => object는 key와 value의 집합체

// 1. Literals and properties
// obejct를 만드는 방법
const obj1 = {};            // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax


const name = 'ellie';
const age = 4;
function print1(name, age) {
    console.log(name);
    console.log(age);
    // 인자가 많아지면 관리가 힘들어진다.
}
print1(name, age);

const ellie = { name: 'ellie', age = 4 };
function print2(person) {
    console.log(person.name);
    console.log(person.age);
}
print2(ellie);


// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);  // true

delete ellie.hasJob;
console.log(ellie.hasJob);  // undefined


// 2. Computed properties
// key should be always string
console.log(ellie.name);        // 코딩하는 순간 키에 해당하는 값을 받아오고 싶을 때
console.log(ellie['name']);     // 배열에서 데이터를 받아오는 것처럼 접근이 가능    / 정확하게 어떤 키가 필요한지 모를 때 (런타임에서 결정될 때)

ellie['hasJob'] = true;
console.log(ellie.hasJob);      // true

function printValue(obj, key) {
    console.log(obj.key);       // undefined
    console.log(obj['key']);    // ellie
}

printValue(ellie, 'name');


// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 30);    // 함수를 이용하여 값만 전달


// 4. Constructor Function
function Person(name, age){     // object를 만들어주는 함수     / class와 같은 템플릿  => JavaScript에서 class가 없을 때 이 기능을 사용했었음
    // return {
    //     name,   // key와 value의 이름이 동일하다면 생략할 수 있다.
    //     age,
    // };

    // return {
    //     name: name,
    //     age: age,
    // };

    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

console.log(person4);


// 5. in operator: property existence check (key in obj)
// 해당 object안에 해당하는 키가 있는지 없는지 확인하기 위함
console.log('name' in ellie);   // true
console.log('age' in ellie);    // true
console.log('random' in ellie); // false
console.log(ellie.random);      // undefined


// 6. for..in vs for..of
// for (key in obj)
for (key in ellie) {    // ellie가 가지고 있는 key들이 블럭을 돌 때마다 지역변수에 할당이 되어진다. 
    console.log(key);   // ellie 안에 있는 모든 key들이 출력된다.   // name, obj, hasJob
}

// for (value of iterable)  // object를 쓰는 것이 아니라 배열과 같은 리스트 (순차적으로 iterable)한 값들에 사용
const array = [1, 2, 4, 5];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (value of array) {
    console.log(value);
}


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };      // user라는 변수는 메모리를 가리키고 있는데 메모리에는 reference가 들어있다. reference에는 name은 'ellie'이고 age는 '20'인 object를 가리키고 있다.
const user2 = user;                             // user2라는 변수는 user의 메모리와 동일한 reference가 들어있다. referenct에는 user와 똑같은 object를 가리키고 있다.
user2.name = 'coder';
console.log(user);      // {name: "coder", age: "20"}


// old way
const user3 = {};
for (key in user) {     // user안에 있는 key를 반복 ( 1 -> name, 2 -> age )
    user3[key] = user[key];
}
console.log(user3);     // {name: "coder", age: "20"}

const user4 = {};
// JavaScript에 있는 모든 object는 Object를 상속한다. 
Object.assign(user4, user);
console.log(user4);     // {name: "coder", age: "20"}

const user5 = Object.assign({}, user);
console.log(user5);     // {name: "coder", age: "20"}

// another sample
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);    // 뒤에있는 값이 앞에 나온 동일한 property가 있으면 덮어 씌운다.
console.log(mixed.color);       // blue
console.log(mixed.size);        // big