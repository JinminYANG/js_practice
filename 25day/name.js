let selectedItem = document.getElementsByName("first");	// name 속성값이 "first"인 모든 요소를 선택한다

for (let i = 0; i < selectedItem.length; i++) {
    selectedItem.item(i).style.color = "orange";	// 선택된 모든 요소의 텍스트 색상을 변경한다
}