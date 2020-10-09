// 객체(object) - setter

let gildong = {age: 18};
gildong.age = 20;
console.log(gildong.age);

Object.defineProperty(gildong, "changeAge", {
    set: function (n) {
        this.age = this.age - n;
    }
});
gildong.changeAge = 5;
console.log(gildong.age);

