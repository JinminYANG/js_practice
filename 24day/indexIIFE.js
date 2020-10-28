// index.js에 정의된 코드를 Function Expression으로 둘러친 다음
(function (exports, require, module, __filename, __dirname) {

    var greet = () => {
        console.log('Greetings from index.js!');
    };
    module.exports = greet

// 바로 Invoke(호출) 시키다.
} (module.exports, require, module, filename, dirname);

// 그리고 module.exports를 리턴한다.
return module.exports;)