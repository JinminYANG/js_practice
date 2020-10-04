function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

let myDog = new Dog("흰색", "흰둥이", 3);

delete myDog.age; // age 프로퍼티를 삭제함.

console.log("우리집 강아지의 나이는 " + myDog.age + "입니다.");

