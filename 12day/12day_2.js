function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

let myDog = new Dog("흰색", "흰둥이", 3);

Object.defineProperty(myDog, 'color', {enumerable : false} );
// color 프로퍼티의 enumerable 속성을 false로 설정

console.log(Object.keys(myDog));
// 객체가 가진 고유 프로퍼티 중에서 열거할 수 있는 프로퍼티 이름을 배열에 담아 반환

console.log(Object.getOwnPropertyNames(myDog));
// 객체가 가진 모든 고유 프로퍼티의 이름을 배열에 담아 반환
