let register = document.querySelector("#register");
let toDoWhat = register.querySelector("#what");
let toDoWho = register.querySelector("#who");
let toDoOrderList = register.querySelector("input[type='radio']");

let TODOS_LS = [];

var oReq

function toAJAX(){
    // 서버에 요청하는 부분
    oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function () {
        // alert(this.responseText);
        // alert(TODOS_LS);
        document.innerText(TODOS_LS);
    });
    oReq.open("POST", "/todo");
    oReq.setRequestHeader('Content-type', 'application/json');
    oReq.onreadystatechange = function(){
        if(oReq.readyState !== XMLHttpRequest.DONE){
            return;
        }

        if(oReq.status === 200){
            console.log(oReq.responseText);
        }else{
            console.log('Error!');
        }
    }
    oReq.send(JSON.stringify(TODOS_LS));

    var AJAXSubmit = (function () {
        console.log("hi");
    });
    // 여기까지
}

function process(){
    let data = oReq.responseText;
    alert("요청 결과 : " + data);
}


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

    toAJAX();
}

function handleSubmit(event) {
    event.preventDefault();

    toDoOrderList = register.querySelector("input[type='radio']:checked").value;

    // console.log(toDoWhat.value, toDoWho.value, toDoOrderList);
    TODOS_LS.push(toDoWhat.value, toDoWho.value, toDoOrderList);

    addStudy(TODOS_LS);
}

function init() {
    // console.log("hello");
    register.addEventListener("submit", handleSubmit);
}

init();