function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
    this.family = "말티즈"; // 프로토타입에 속성(property)을 추가할 때에는 기본 값을 가지게 할 수 있다.
    this.breed = function() {
        return this.color + " " + this.family;
    };
}

let myDog = new Dog("흰색", "흰둥이", 3);
let hisDog = new Dog("갈색", "가을이", 4);

console.log("우리 집 강아지는 " + myDog.family + "이고, 친구네 집 강아지도 " + hisDog.family + "입니다.");


