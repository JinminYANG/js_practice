# 심벌

ES6에서는 심벌(symbol)이라는 새로운 원시 자로형이 추가되었다.

## 11.1 심벌의 고유성

심벌은 항상 고유하며 객체 속성의 식별자로 사용할 수 있다.

```
const me = Symbol("Jinmin");
console.log(me);
// Symbol(Jinmin)
```

같은 값을 가진 새로운 심벌을 만들면 어떻게 될까
```
const me = Symbol("Jinmin");
console.log(me);
// Symbol(Jinmin)

const clone = Symbol("Jinmin");
console.log(clone);
// Symbol(Jinmin)

console.log(clone);
// Symbol(Jinmin)

console.log(me == clone);
// false
console.log(me === clone);
// false
```

두 심벌의 값은 동일하지만, 각 심벌은 항상 고유하므로 다른 심벌과 겹치지 않는다.

<br>

---

## 11.2 객체 속성에 대한 식별자

앞서 언급했듯이 심벌을 사용하여 객체 속성에 대한 식별자를 만들 수 있다.

```
const office = {
    "Tom": "CEO",
    "Mark": "CTO",
    "Mark": "CIO",
};

for (person in office) {
    console.log(person);
}

// Tom
// Mark
```

사무실 객체가 있고, 그 사무실에는 3명의 사람이 있다.

그중 2명은 이름이 같다.

이럴 때 속성 이름이 겹치는 것을 피하기 위해 심벌을 사용할 수 있다.

```
const office = {
    [Symbol("Tom")]: "CEO",
    [Symbol("Mark")]: "CTO",
    [Symbol("Mark")]: "CIO",
};

for (person in office) {
    console.log(person);
}
// undefined
```

심벌은 열거 가능하지 않기 때문에 심벌에 대해 반복하려고 하면 undefined를 얻게 된다.

즉, for in으로 심벌에 대해 반복할 수는 없다.

여기서 객체 속성의 배열을 얻기 위해서는 Object.getOwnPropertySymbols()를 사용한다.

```
const office = {
    [Symbol("Tom")]: "CEO",
    [Symbol("Mark")]: "CTO",
    [Symbol("Mark")]: "CIO",
};

const symbols = Object.getOwnPropertySymbols(office);
console.log(symbols);
// 0: Symbol(Tom)
// 1: Symbol(Mark)
// 2: Symbol(Mark)
// length: 3
```

배열을 얻은 후 속성에 접근하려면 map을 사용하면 된다.
```
const symbol = Object.getOwnpropertySymbols(office);
const value = symbols.map(symbol => office[symbol]);
console.log(value);
// 0: "CEO"
// 1: "CTO"
// 2: "CIO"
// length: 3
```

심벌의 모든 값을 포함하는 배열을 얻을 수 있다.