// 객체(object) - getter

let gildong = {age: 19};

console.log(gildong.age);


Object.defineProperty(gildong, "koreanAge", {
    get: function () {
        return this.age + 1;
    }
});

console.log(gildong.koreanAge);


