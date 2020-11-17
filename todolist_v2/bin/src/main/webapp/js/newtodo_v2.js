let registerForm = document.querySelector("#register");
let newWhat = registerForm.querySelector("#what");
let newWho = registerForm.querySelector("#who");
let newOrderList = registerForm.querySelector("input[type='radio']");

var arr = [];
var data = new Object();
data.what = "자바스프링";
data.who = "김영곤";
data.orderList = "1순위";
console.log(data);

arr.push(data);
console.log(arr);

var dataJson = JSON.stringify(arr, null, 2);

function handleSubmit(event) {
    // event.preventDefault();
    newOrderList = register.querySelector("input[type='radio']:checked").value;
    // console.log(newWhat.value, newWho.value, newOrderList);
    let what = newWhat.value;
    let who = newWho.value;
    let orderList = newOrderList;
    let pushs = {what, who, orderList};
    console.log(pushs);
    // data.push(JSON.parse(pushs));
    arr.push(pushs);
    console.log(arr);
    // xhr.send(JSON.stringify(data));
}

var xhr = new XMLHttpRequest();
xhr.open('POST', '/todo');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded', true);
xhr.send();

xhr.onreadystatechange = function (event) {
    if (xhr.readyState !== XMLHttpRequest.DONE) {
        return;
    }

    if (xhr.status === 200) {
        console.log(xhr.responseText);
    } else {
        console.log('Error!');
    }
}

function init() {
    registerForm.addEventListener("submit", handleSubmit);
}

init();