function Dog(color, name, age) { // 강아지에 관한 생성자 함수를 작성
    this.color = color;          // 색에 관한 속성(property)
    this.name = name;            // 이름에 관한 속성(property)
    this.age = age;              // 나이에 관한 속성(property)
}

let myDog = new Dog("흰색", "흰둥이", 1); // 이 객체는 Dog라는 프로토타입을 가짐.

console.log("우리 집 강아지는 " + myDog.name + "라는 이름의 " + myDog.color + " 털이 매력적인 강아지이다.");

