# 함수 기본값 인수

## 3.1 함수 인수의 기본값 (ES6 이전)

ES6 이전에는 함수 인수의 기본값을 설정하는 것이 쉽지 않았다.
```
function getLocation(city, country, continent) {
    if (typeof country === 'undefined') {
        country = 'Italy';
    }

    if (typeof continent === 'undefined') {
        continent = 'Europe';
    }

    console.log(continent, country, city);
}

getLocation('Milan');
// Europe Italy Milan

getLocation('Paris', 'France');
// Europe France Paris
```

예제의 함수는 city, country, continent 세 가지 인수를 취한다.

함수 본문에서 country, continent가 정의되지 않았는지 확인하고, 정의되지 않은 경우에만 기본값을 제공하는 것이 이 코드의 내용이다.

getLocation('Milan') 호출하면 country, continent는 정의되지 않았으므로 함수의 기본값으로 대체된다.

<br>

기본 값이 인수 목록의 시작부분에 있도록 하려면
```
function getLocation(continent, country, city) {
    if (typeof country === 'undefined') {
        country = 'Italy';
    }

    if (typeof continent === 'undefined') {
        continent = 'Europe';
    }

    console.log(continent, country, city);
}

getLocation(undefined, undefined, 'Milan');
// Europe Italy Milan

getLocation(undefined, 'Paris', 'France');
// Europe France Paris
```

인수로 undefined 값을 전달해야 한다.

ES6은 <strong>함수 기본값 인수</strong>를 제공한다.

<br>

---

## 3.2 함수 기본값 인수

```
function calculatePrice(total, tax = 0.1, tip = 0.05) {
    // tax, tip에 값을 할당하지 않으면 기본값으로 0.1과 0.05가 쓰인다.
    return tota; + (total * tax) + (total * tip);
}
```

```
// tip에 0.15를 할당하려 했지만, 아래처럼 쓰면 0.15는 tax에 할당된다.
calculatePrice(100, 0.15);
```

```
// 이렇게 쓰면 tip에 0.15를 할당하게 된다.
calculatePrice(100, undefined, 0.15);
```

디스트럭처링(destructuring)을 통해 코드를 다음과 같이 바꿔 쓸 수 있다.
```
function calculatePrice({total = 0, tax = 0.1, tip = 0.05,} = {}) {
    return total + (total * tax) + (total * tip);
}

const bill = calculatePrice({tip: 0.15, total: 150});
```

함수의 인수를 객체로 만들었다.

함수를 호출하면 매개변수가 주어진 키에 맞춰서 입력되기 때문에 매개변수의 순서를 걱정할 필요가 없다.

tip의 기본값은 0.05지만 0.15로 덮어 썼고 tax는 값을 덮어 쓰지 않아 기본값인 0.1로 유지되었다.

<br>

```
{total = 0, tax = 0.1, tip = 0.05, } = {}
```

여기서 인수 객체를 빈 객체로 설정하지 않고 (= {}를 빼고) 선언한 다음 아무 매개변수도 없이 calculatePrice()를 실행하면 오류가 발생한다.

```
Cannot destructure property `total` of `undefined` or `null`.
```

= {}를 추가해야 인수를 기본적으로 객체로 설정한다.

함수에 매개변수를 어떻게 전달하든 상관없이 인수는 객체가 된다.

```
calculatePrice({});
// 0

calculatePrice();
// 0

calculatePrice(undefined);
// 0
```

인수로 무엇을 전달했는지에 상관없이 total, tax, tip 세 가지 기본 속성을 가진 객체로 기본 설정되었다.

= {}가 없는 코드의 결과를 비교해보자.
```
function calculatePrice({total = 0, tax = 0.1, tip = 0.05,}) {
    return total + (total * tax) + (total * tip);
}

calculatePrice({});
// Cannot destructure property `total` of `undefined` or `null`.

calculatePrice();
// Cannot destructure property `total` of `undefined` or `null`.

calculatePrice(undefined);
// Cannot destructure property `total` of `undefined` or `null`.
```