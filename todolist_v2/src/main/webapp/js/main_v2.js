const AllButtons = document.querySelectorAll("button");
const sectionDOING = document.querySelector("#DOING");
const sectionDONE = document.querySelector("#DONE");

for(const button of AllButtons){
	button.addEventListener('click', function() {
		handleSubmit(this);
	});
}


function handleSubmit(sendData){
	const sendType = sendData.closest("section").getAttribute("id");
	const sendId = sendData.getAttribute("id");
	const submitData = {
			"type" : sendType,
			"id" : sendId
	};
	const sendArticle = sendData.closest("article");
	
	
	const xhr = new XMLHttpRequest();
	xhr.open('PATCH', 'todo/type', true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) {
            return;
        }

        if (xhr.status === 200) {
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
    
    xhr.send(JSON.stringify(submitData));
}