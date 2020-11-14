let registerForm = document.querySelector("#register");
let newWhat = registerForm.querySelector("#what");
let newWho = registerForm.querySelector("#who");
let newOrderList = registerForm.querySelector("input[type='radio']");

function handleSubmit(event) {
	event.preventDefault();
	
/*    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/todo');
    xhr.send(1);

    xhr.onreadystatechange = function (event) {
        if (xhr.readyState !== XMLHttpRequest.DONE) {
            return;
        }

        if (xhr.status === 200) {
            console.log(xhr.responseText);
        } else {
            console.log('Error!');
        }
    }*/

}



function init() {
    registerForm.addEventListener("submit", handleSubmit);
}

init();