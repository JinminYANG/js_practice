var selectData = document.querySelectorAll("button");

var sectionDOING = document.querySelector("#DOING");
var sectionDONE = document.querySelector("#DONE");

for(const button of selectData){
	button.addEventListener('click', function(event) {
		button.addEventListener("click", handleSubmit(button));
	});
}


//function typeChange(){
//	selectData.forEach(function (element){
//		var sendType = element.parentNode.parentNode.getAttribute("id");
//		var sendId = element.getAttribute("id");
//		var submitData = {
//				"type" : sendType,
//				"id" : sendId
//		};
//		
//		console.log(submitData);
//		element.addEventListener("click", handleSubmit(submitData));
//	});
//}

function handleSubmit(sendData){
	console.log(sendData);
	var sendType = sendData.closest("section").getAttribute("id");
	var sendId = sendData.getAttribute("id");
	var submitData = {
			"type" : sendType,
			"id" : sendId
	};
	var sendArticle = sendData.closest("article");
	
	console.log(submitData.type);
	
	var xhr = new XMLHttpRequest();
	xhr.open('PATCH', 'todo/type', true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	
    xhr.onreadystatechange = function (event) {
        if (xhr.readyState !== XMLHttpRequest.DONE) {
            return;
        }

        if (xhr.status === 200) {
            console.log(xhr.responseText);
            if(submitData.type === "TODO"){
            	sectionDOING.appendChild(sendArticle);
            }else if(submitData.type === "DOING"){
            	sectionDONE.appendChild(sendArticle);
            	sendData.setAttribute('class', 'hidden_button');
            }
        } else {
            console.log('Error!');
        }
    }
    
    console.log(JSON.stringify(submitData));
    xhr.send(JSON.stringify(submitData));
}
















