var registerForm = document.querySelector("#register");
var title = registerForm.querySelector("#title");
var nickname = registerForm.querySelector("#nickname");
var sequence = registerForm.querySelector("input[type='radio']");
registerForm.onsubmit = handleSubmit;

function chkword(obj, maxByte){
	var strValue = obj.value;
	var strLen = strValue.length;
	var totalByte = 0;
	var len = 0;
	var oneChar = "";
	var str2 = "";
	
	for(var i =0; i<strLen; i++){
		oneChar = strValue.charAt(i);
		if(escape(oneChar).length>4){
			totalByte += 2;
		} else {
			totalByte++;
		}
		
		// 입력한 문자 길이보다 넘치면 잘라내기위해 저장
		if(totalByte <= maxByte){
			len = i + 1;
		}
	}
	
	// 넘어가는 글자는 잘라낸다.
	if(totalByte > maxByte){
		str2 = strValue.substr(0, len);
		obj.value = str2;
		chkword(obj, 4000);
	}
}

function handleSubmit() {
	sequence = registerForm.querySelector("input[type='radio']:checked").value;

    var submitData = {
    		"title" : title.value,
    		"name" : nickname.value,
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

    xhr.send(JSON.stringify(submitData));
    
    window.location.href = "main";
    
    return false;
}
