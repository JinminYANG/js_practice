let day = new Date();   // Date 객체를 생성

// 객체 day의 프로토타입이 Date.prototype인지를 검사함.
console.log(Date.prototype.isPrototypeOf(day));
console.log(Date.prototype.isPrototypeOf(new String()));

