function Dog(color, name, age, family) {
    this.color = color;
    this.name = name;
    this.age = age;
    this.family = family;
    this.breed = function() {
        return this.color + " " + this.family;
    }
}

let myDog= new Dog("흰색", "흰둥이", 3, "말티즈");

console.log(myDog.hasOwnProperty("color"));
console.log(myDog.hasOwnProperty("breed"));
console.log(myDog.hasOwnProperty("class"));  // 상속받은 프로퍼티

