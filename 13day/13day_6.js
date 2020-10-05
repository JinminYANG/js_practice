function func(n) {
    this.number = n;
}

myFunc = new func(4);
console.log(myFunc + 5);

func.prototype.valueOf = function() {
    return this.number;
}
console.log(myFunc + 5);

