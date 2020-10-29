function changeLink() {
    let link = document.getElementById("link");	// 아이디가 "link"인 요소를 선택한다
    link.href = "https://zlnmln.tistory.com/";	// 해당 요소의 href 속성값을 변경한다
    link.innerHTML = "블로그 바로 가기";		// 해당 요소의 내용을 변경한다
}