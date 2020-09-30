function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

Dog.prototype.family = "말티즈";
// 현재 존재하고 있는 Dog 프로토타입에 family 프로퍼티를 추가함

Dog.prototype.breed = function () {
// 현재 존재하고 있는 Dog 프로토타입에 breed 메소드를 추가함
    return this.color + " " + this.family;
};

let myDog = new Dog("흰색", "흰둥이", 3);
let hisDog = new Dog("갈색", "초코", 4);

console.log("우리 집 강아지는 " + myDog.family + "이고, 친구네 집 강아지도 " + hisDog.family + "입니다.");
console.log("우리 집 강아지의 품종은 " + myDog.breed() + "입니다.");
console.log("친구네 집 강아지의 품종은 " + hisDog.breed() + "입니다.");

