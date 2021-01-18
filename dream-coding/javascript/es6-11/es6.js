// JavaScript 최신 문법 (ES6, ES11)

/*
* Shorthand property names
*/
{
    const ellie1 = {
        name: 'ellie',
        age: '18',
    };

    const name = 'ellie';
    const age = '18';

    const ellie2 = {
        name: name,
        age: age,
    };

    // is Good!
    const ellie3 = {
        // key와 value가 동일할 때는 하나로만 생략이 가능하다
        name,
        age,
    };
}

/*
* Destructuring Assignment
*/
{
    // object
    const student = {
        name: 'Anna',
        level: 1,
    };

    {
        const name = student.name;
        const level = student.level;
        console.log(name, level);
    }

    // is Good!
    {
        // object안에 있는 key의 이름을 괄호안에 정의해주고 objcet의 이름을 작성하면된다.
        const {name, level} = student;
        console.log(name, level);

        const {name: studentName, level: studentLevel} = student;
        console.log(studentName, studentLevel);
    }


    // array
    const animals = ['강아지', '고양이'];

    {
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }

    // is Good!
    {
        const [first, second] = animals;
        console.log(first, second);
    }
}


/*
* Spread Syntax
*/
// Object가 가리키고 있는 주소의 참조 값을 복사한다.
{
    const obj1 = {key: 'key1'};
    const obj2 = {key: 'key2'};
    const array = [obj1, obj2];

    // array copy
    // '...'은 배열안에 들어있는 아이템들을 하나씩 낱개로 가져와서 복사해오는 것을 말한다.
    const arrayCopy = [...array];
    console.log(array, arrayCopy);

    const arrayCopy2 = [...array, {key: 'key3'}];
    obj1.key = 'newKey';    // Object를 변경하게 되면 전부 다 영향이 간다.
    console.log(array, arrayCopy, arrayCopy2);

    // object copy
    const obj3 = {...obj1};
    console.log(obj3);

    // array concatenation
    const fruits1 = ['복숭아', '딸기'];
    const fruits2 = ['바나나', '키위'];
    const fruits = [...fruits1, ...fruits2];
    console.log(fruits);

    // object merge
    // !키가 동일한 Object를 병합한다면 제일 뒤에있는 것이 앞에있는 것을 덮어씌운다.
    const dog1 = {dog1: '가을'};
    const dog2 = {dog2: '초코'};
    const dogs = {...dog1, ...dog2};
    console.log(dogs);
}


/*
* Default parameters
*/
{
    {
        function printMessage(message) {
            if (message === null) {
                message = 'default message';
            }
            console.log(message);
        }

        printMessage('hello');
        printMessage();     // undefined
    }

    // is Good!
    {
        function printMessage(message = 'default message') {
            console.log(message);
        }

        printMessage('hello');
        printMessage();
    }
}

/*
* Ternary Operator
*/
{
    const isCat = true;

    {
        let component;
        if (isCat) {
            component = '고양이';
        } else {
            component = '강아지';
        }
        console.log(component);
    }

    // is Good!
    {
        const component = isCat ? '고양이' : '강아지';
        console.log(component);
    }
}

/*
* Template Literals
*/
{
    const weather = '맑음';
    const temperature = '16C';

    console.log('Today weather is ' + weather + ' and temperature is ' + temperature);

    // is Good!
    console.log(`Today weather is ${weather} and temperature is ${temperature}`);
}

/*
* Optional Chaining (ES11)
*/
{
    const person1 = {
        name: 'Ellie',
        job: {
            title: 'S/W Engineer',
            manager: {
                name: 'Bob',
            },
        },
    };

    const person2 = {
        name: 'Bob',
    };

    {
        function printManager(person) {
            console.log(person.job.manager.name);
        }

        printManager(person1);
        // printManager(person2);
    }

    {
        function printManager(person) {
            console.log(
                person.job
                    ? person.job.manager
                    ? person.job.manager.name
                    : undefined
                    : undefined
            );
        }
        printManager(person1);
        printManager(person2);
    }

    {
        function printManager(person){
            console.log(person.job && person.job.manager && person.job.manager.name);
        }
        printManager(person1);
        printManager(person2);
    }

    // is Good!
    {
        function printManager(person){
            console.log(person.job?.manager?.name);
        }
        printManager(person1);
        printManager(person2);
    }
}


/*
* Nullish Coalescing Operator (ES11)
*/
{
    // Logical OR operator
    // 앞에 것이 false 일때만 뒤에 것이 실행됨
    // false: false, '', null, 0, undefined ...
    {
        const name = 'Ellie';
        const userName = name || 'Guest';
        console.log(userName);
    }

    {
        const name = null;
        const userName = name || 'Guest';
        console.log(userName);
    }

    {
        const name = '';
        const userName = name || 'Guest';
        console.log(userName);

        const num = 0;
        const message = num || 'undefined';
        console.log(message);
    }

    // is Good!
    {
        const name = '';
        const userName = name ?? 'Guest';
        console.log(userName);

        const num = 0;
        const message = num ?? 'undefined';
        console.log(message);
    }
}









