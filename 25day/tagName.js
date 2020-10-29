// DOM 요소 선택 - getElementsByTagName()

let selectedItem = document.getElementsByTagName("li");		// 모든 <li> 요소를 선택함.
for (let i = 0; i < selectedItem.length; i++) {
    selectedItem.item(i).style.color = "red";	// 선택된 모든 요소의 텍스트 색상을 변경함.
}