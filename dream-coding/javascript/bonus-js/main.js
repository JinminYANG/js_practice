// 변수 primitive 타입과 Objcet의 차이점

// primitive data type (가장 작은 단위의 데이터 타입)
// number, string, boolean, null, undefined, (symbol)
let number = 2;
let number2 = number;
console.log(number);
console.log(number2);

number2 = 3;
console.log(number);
console.log(number2);

// Object - 최소한 한 두가지의 다양한 데이터를 한군데 묶어놓은 집합 (배열, 리스트, 함수 등)
const obj = {
    // key: value,
    name: 'ellie',
    age: 5,
};
console.log(obj.name);

/*
// reference 자체를 다른 reference(Object)로 변경은 불가능
obj = {
    name: 'jinmin',
    age: 27,
};
*/

// reference가 가리키고 있는 Object의 안의 내용은 변경이 가능하다.
obj.name = 'Jinmin';

let obj2 = obj;
console.log(obj2.name);

obj.name = 'James';
console.log(obj.name);
console.log(obj2.name);


let a = 2;
a = 5;
a = 9;

const b = 2;
// b = 5;       // error!






