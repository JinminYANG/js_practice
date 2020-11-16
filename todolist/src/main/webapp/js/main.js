var selectData = document.querySelectorAll("button");
console.log(selectData);

selectData.forEach(function (element){
	element.addEventListener("click", function(){
		console.log("hi" + element.getAttribute("id"));
	});
});



function typeChange(){
	selectData.forEach(function (element){
		var sendType = element.parentNode.parentNode.getAttribute("id");
		var sendId = element.getAttribute("id");
		var submitData = {
				"type" : sendType,
				"id" : sendId
		};
		
		console.log(submitData);
		element.addEventListener("click", handleSubmit(submitData));
	});
}

function handleSubmit(sendData){
	var xhr2 = new XMLHttpRequest();
	xhr2.open('PATCH', 'todo/type', true);
	xhr2.setRequestHeader('Content-Type', 'application/json');
	
    xhr2.onreadystatechange = function (event) {
        if (xhr2.readyState !== XMLHttpRequest.DONE) {
            return;
        }

        if (xhr2.status === 200) {
            console.log(xhr2.responseText);
        } else {
            console.log('Error!');
        }
    }
    
    console.log(JSON.stringify(sendData));
    xhr2.send(JSON.stringify(sendData));
}
















