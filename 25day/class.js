// DOM 요소 선택 - getElementByClassName()

let selectedItem = document.getElementsByClassName("odd");	// 클래스가 "odd"인 모든 요소를 선택한다

for (let i = 0; i < selectedItem.length; i++) {
    selectedItem.item(i).style.color = "green";	// 선택된 모든 요소의 텍스트 색상을 변경한다
}