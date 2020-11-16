var registerForm = document.querySelector("#register");
var title = registerForm.querySelector("#title");
var dlfma = registerForm.querySelector("#dlfma");
var sequence = registerForm.querySelector("input[type='radio']");
registerForm.onsubmit = handleSubmit;

function handleSubmit() {
	sequence = registerForm.querySelector("input[type='radio']:checked").value;
    console.log(dlfma);
    var submitData = {
    		"title" : title.value,
    		"name" : dlfma.value,
    		"sequence" : sequence
    };
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'todo', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
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
    console.log(submitData);
    xhr.send(JSON.stringify(submitData));
    
    window.location.href = "main";
    window.location.reload();
    
    return false;
}
