// async & await
// clear style of using promise


// 1. async
// 함수 앞에 async를 사용하면 코드블럭이 promise로 변환된다.
async function fetchUser() {
    // do network request in 10 secs...
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);


// 2. await (기다려)
// async가 사용되는 함수 안에서만 사용이 가능하다.

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    // throw 'error';
    return '사과';
}

async function getBanana() {
    await delay(1000);
    return '바나나';
}

/*
function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
}*/

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);


// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join(' , '));
}

pickAllFruits().then(console.log);


function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);


// callback-to-promise를 async로 처리하기
class UserStorage {
    async delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async loginUser(id, password) {
        await this.delay(2000);
        if ((id === 'ellie' && password === 'dream') || (id === 'coder' && password === 'academy')) {
            return id;
        } else {
            return new Error('not found');
        }
    }

    async getRoles(user) {
        await this.delay(1000);
        if (user === 'ellie') {
            return {name: 'ellie', role: 'admin'};
        } else {
            return new Error('no access');
        }
    }
}

async function getUserInfo() {
    try {
        const userId = await userStorage.loginUser(id, password);
        const userInfo = await userStorage.getRoles(userId);
        return userInfo;
    } catch (error) {
        return new Error ('get user error');
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

getUserInfo().then(console.log);


