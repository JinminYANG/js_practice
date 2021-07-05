# 문자열 메서드

## 5.1 기본적인 문자열 메서드

### indexOf()
문자열에서 지정된 값이 처음 나타나는 위치를 반환한다.
```
const str = "this is a short sentence";
str.indexOf("short");
// 10
```

### slice()
문자열의 지정된 부분을 새 문자열로 반환한다.
```
const str = "pizza, orange, careals";
str.slice(0, 5);
// "pizza"
```

### toUpperCase()
문자열 내의 모든 문자를 대문자로 변환한다.
```
const str = "i ate an apple";
str.toUpperCase();
// "I ATE AN APPLE"
```

### toLowerCase()
문자열의 모든 문자를 소문자로 바꾼다.
```
const str = "I ATE AN APPLE";
str.toLowerCase();
// "i ate an apple"
```

이것들은 대표적인 메서드이므로 다른 메서드들이나 자세한 설명은 MDN 문서에서 확인 할 수 있다.

<br>

---

## 5.2 새로운 문자열 메서드

ES6는 새로운 문자열 메서드를 도입했다.

### startsWith()
매개변수로 받은 값으로 문자열이 시작하는지 확인한다.
```
const code = "ABCDEFG";

code.startWith("ABB");
// false

code.startWith("abc");
// false (대소문자 구별)

code.startWith("ABC");
// true
```

매개변수를 추가로 전달하면 메서드가 검사를 시작하는 시작점을 지정할 수도 있다.
```
const code = "ABCDEFG";

code.startWith("DEF", 3);
// true
```

### endsWith()
매개변수로 받은 값으로 문자열이 끝나는지 확인한다.
```
const code = "ABCDEF";

code.endsWith("DDD");
// false

code.endsWith("def");
// false

code.endsWith("DEF");
// true
```

매개변수로 문자열의 얼마만큼만 확인할지 길이를 전달할 수 있다.
```
const code = "ABCDEFGHI";

code.endsWith("EF", 6);
// true (첫 6개 문자인 ABCDEF만을 고려한다.)
```

### includes()
매개변수로 받은 값이 문자열에 포함되어 있는지 확인한다.
```
const code = "ABCDEF";

code.includes("ABB");
// false

code.includes("abc");
// false (대소문자 구별)

code.includes("CDE");
// true
```

### repeat()
문자열을 반복하며 횟수를 인수로 받는다.
```
let hello = "Hi";
console.log(hello.repeat(10));
// HiHiHiHiHiHiHiHiHiHi
```