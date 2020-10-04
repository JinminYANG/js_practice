function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

let myDog = new Dog("흰색", "흰둥이", 3);
let hisDog = new Dog("흰색", "흰둥이", 3); // 모든 프로퍼티의 값이 모두 같은 객체를 생성

console.log((myDog == hisDog));
console.log((myDog === hisDog));

let herDog = hisDog;   // hisDog 객체를 변수 herDog에 대입
console.log((hisDog == herDog));
console.log((hisDog === herDog));



