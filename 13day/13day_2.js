function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

let myDog = new Dog("흰색", "흰둥이", 3);

Object.defineProperty(myDog, 'color', { enumerable : false} );
// color 프로퍼티의 enumerable 속성을 false로 설정

console.log(myDog.propertyIsEnumerable("color"));
console.log(myDog.propertyIsEnumerable("name"));
console.log(myDog.propertyIsEnumerable("age"));

