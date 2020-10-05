let day = new Date(); // Date 객체를 생성함.

console.log(Object.isExtensible(day));
// 객체 day에 새로운 프로퍼티를 추가할 수 있는지 검사함.

let myDay = Object.preventExtensions(day);
// 해당 객체에 새로운 프로퍼티를 추가할 수 없도록 설정함.

console.log(Object.isExtensible(day));

