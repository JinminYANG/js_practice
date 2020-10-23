// Array.prototype - entries()

let arr = [1, true, "JavaScript"];

let arrEntries = arr.entries();

for (let entry of arrEntries) {
    console.log(entry);   // 배열의 인덱스별로 키(key)와 값(value)의 한 쌍을 출력한다
}

