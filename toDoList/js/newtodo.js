let register = document.querySelector("#register");
let toDoWhat = register.querySelector("#what");
let toDoWho = register.querySelector("#who");
let toDoOrderList = register.querySelector("input[type='radio']");

let TODOS_LS = [];

function addStudy(study) {
    const leadStudy = study;
    console.log(leadStudy);

    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const span = document.createElement("span");

    h3.innerText = leadStudy[0];
    span.innerText = leadStudy[1],
    leadStudy[2];
    div.appendChild(h3);
    div.appendChild(span);
}

function handleSubmit(event) {
    event.preventDefault();

    toDoOrderList = register
        .querySelector("input[type='radio']:checked")
        .value;

    // console.log(toDoWhat.value, toDoWho.value, toDoOrderList);
    TODOS_LS.push(toDoWhat.value, toDoWho.value, toDoOrderList);

    addStudy(TODOS_LS);

    // 서버에 요청하는 부분
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function () {
        // alert(this.responseText);
        alert(TODOS_LS);
    });
    oReq.open("POST", "/todo");
    oReq.send(JSON.stringify(TODOS_LS));

    var AJAXSubmit = (function () {
        console.log("hi");
    });
    // 여기까지
}

function init() {
    // console.log("hello");
    register.addEventListener("submit", handleSubmit);


}

init();