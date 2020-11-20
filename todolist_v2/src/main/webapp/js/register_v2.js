// 수정 버전

const registerForm = document.querySelector("#register");
const title = registerForm.querySelector("#title");
const nickname = registerForm.querySelector("#nickname");
let sequence = registerForm.querySelector("input[type='radio']");
registerForm.onsubmit = handleSubmit;


function handleSubmit() {
	sequence = registerForm.querySelector("input[type='radio']:checked").value;

    const submitData = {
    		"title" : title.value,
    		"name" : nickname.value,
    		"sequence" : sequence
    };
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'todo', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) {
            return;
        }

        if (xhr.status === 200) {
            console.log(xhr.responseText);
            console.log(xhr.response);
        } else {
            console.log('Error!');
        }
    }

    xhr.send(JSON.stringify(submitData));
//    window.location.href = "main";
    console.log(window);
    console.log(window.location);
    
    return false;
}
