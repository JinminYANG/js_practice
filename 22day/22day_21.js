// Array.prototype - reduceRight()

let arr = [1, 2, 3, 4, 5];

function sumOfValues(x, y) {
    console.log(x + " - " + y + " = " + (x - y)); // reduceRight() 메소드 실행과정
    return x - y;
}

console.log( arr.reduceRight(sumOfValues) );


