function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

let myDog = new Dog("흰색", "흰둥이", 3);

myDog.family = "말티즈";   // 품종에 관한 프로퍼티를 추가

myDog.breed = function() {   // 털색과 품종을 반환해 주는 메소드를 추가
    return this.color + " " + this.family;
}

console.log("우리 집 강아지는 " + myDog.breed() + "입니다.");

