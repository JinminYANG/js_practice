// DOM 요소 선택 - querySelectorAll()

let selectedItem = document.querySelectorAll("li.odd"); // 클래스가 "odd"인 요소 중에서 <li> 요소만을 선택한다

for (let i = 0; i < selectedItem.length; i++) {
    selectedItem.item(i).style.color = "pink";	 // 선택된 모든 요소의 텍스트 색상을 변경한다
}