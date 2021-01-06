'use strict';

/*
    class
        : 연관있는 데이터를 묶어놓는 컨테이너 같은 것
        : fields와 methods가 종합적으로 묶여있는 것
        : method는 없고 fields만 있는 경우 data class 라고 부른다.
        : 내부적으로 보여지는 변수와 밖에서 보일 수 있는 변수들을 나누는 캡슐화
        : 상속과 다양성이 일어날 수 있음
        : class 자체에는 데이터가 들어가 있지 않고 template(틀)만 정해놓는 것
        : class를 이용하여 template을 만들고, 그 class에 데이터를 넣어서 만드는 것이 object
        : class는 실제도 메모리에 올라가지 않지만, 데이터를 넣어서 만든 object는 메모리에 올라간다.
        : 기존에 존재하던 프로토타입을 기반으로 하여 간편하게 쓸 수 있도록 문법만 추가된 것
*/
/*
    class person{
        name;       // property // 속성(field)
        age;        // property // 속성(field)
        speak();    // function // 행동(method)
    }
*/


// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2. Getter and Setters
// 바보같이 만들어도 방어적인 자세로 만들 수 있도록 해주는 것

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }
    /* 
        age() 라는 getter을 정의하는 순간 constructor의 this.age는 메모리에 올라가있는 데이터를 읽어오는 것이 아니라
        get age()를 호출하게 된다.
    */

    set age(value){
        if (value < 0) {    // user1의 나이 값 처럼 말도 안되는 값이 전달되면 setter를 이용하여 Error처리를 해줄 수 있다.
        //    throw Error('age can not be negative');
        }
        this._age = value;
    }
    /*
        age(value)라는 setter를 정의하는 순간 '='을 통해 값을 할당할 때 바로 메모리에 값을 할당하는 것이 아니라
        set age(value)를 호출하게 된다.
        setter 안에서 전달된 value를 this.age에 할당할 때 메모리의 값을 업데이트하는 것이 아니라 setter를 호출하게 된다.
        setter 호출이 반복되어 call stack size exceeded error가 발생한다.
        호출 반복을 방지하기 위해서는 getter와 setter안에서 쓰여지는 변수의 이름을 다른 형태로 바꾸어 줘야한다. 
        ex) this._age 와 같은 형태로 '_'를 사용한다.
    */
}

const user1 = new User('Steve', 'Job', -1);     // 객체 지향적인 개념으로 봤을때 말이 안된다.(age)
console.log(user1.age);


// 3. Fields (public, private)
// '#'기호를 이용하여 priveate field를 나타낸다.
// 클래스 내부에서만 값이 보여지고 접근이 되고 값의 변경이 가능하지만, 클래스 외부에서는 값을 읽을 수도 변경할 수도 없다.

class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);   // undefined


// 4. Static properties and methods
// object에 상관없이 클래스가 가지고 있는 고유한 값과 data의 상관없이 동일하게 반복적으로 사용되어지는 메소드가 있을 때 
// static 키워드를 이용하면 object에 상관없이 class 자체에 연결되어 있다.
// static은 object마다 할당되어지는 것이 아니라 class 자체에서 사용할 수 있다.
// 메모리의 사용을 줄여 효율적으로 사용할 수 있다.

class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);    // object안에 publisher는 값이 지정되지 않은 것으로 인식한다.
console.log(Article.publisher);
Article.printPublisher();


// 5. Inheritance (상속)
// a way for one class to extend another class.
// extends를 이용하여 class를 정의하면 extends하려는 class에 정의된 fields와 methods를 사용할 수 있다.

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {

}
class Triangle extends Shape {
    // 다양성
    // override (재정의)
    draw(){                 // 재정의를 하면 Shape에 있는 draw()는 사용할 수 없다.
        super.draw();       // 재정의하는데 부모의 것을 다시 사용하고 싶다면 Shape(부모)의 함수를 호출하려면 super를 사용하면 된다.
        console.log('▲');
    }

    getArea() {
        return (this.width * this.height) / 2;
    }

    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking: instanceOf
// 왼쪽에있는 object가 오른쪽에 있는 class의 instance 인지 판별 => true/false return
// JavaScript에서 만든 모든 Object Class들은 JavaScript에 있는 Object를 상속한 것이다.

console.log(rectangle instanceof Rectangle);    // true
console.log(triangle instanceof Rectangle);     // false
console.log(triangle instanceof Triangle);      // true
console.log(rectangle instanceof Shape);        // true
console.log(rectangle instanceof Object);       // true
console.log(triangle.toString());