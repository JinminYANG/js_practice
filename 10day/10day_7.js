let uri = "http://google.com/search.php?name=홍길동&city=서울";

let enc1 = encodeURI(uri);
let enc2 = encodeURIComponent(uri);
console.log(enc1);
console.log(enc2);

let dec1 = decodeURI(enc1);
let dec2 = decodeURIComponent(enc2);
console.log(dec1);
console.log(dec2);

