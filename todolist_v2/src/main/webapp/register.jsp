<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"
%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>할일 등록</title>
    <link rel="stylesheet" href="css/register.css?ver=1" />
    <script src="js/register.js?ver=1.11111111" defer></script>
</head>
<body>
<div id="wrap">
    <form id="register">
        <h1 id="subject">할일 등록</h1>

        <ul>
            <li>
                <label for="title" name="question">어떤일인가요?</label>
                <input type="text" id="title" placeholder="swift 공부하기(24자까지)" required name="title" onkeyup="chkword(this, 48)"/> 
            </li>
            <li>
                <label for="name" name="question">누가 할일인가요?</label>
                <input type="text" id="nickname" placeholder="홍길동" required name="dlfma"/>
            </li>
            <li>
                <label for="orderRadio" name="question">우선순위를 선택하세요</label>
                <input type="radio" class="sequence" id="or1" name="sequence" value=1 required/>
                <label for="or1"  name="sequence_label">1순위</label>
                <input type="radio" class="sequence" id="or2" name="sequence" value=2 />
                <label for="or2" name="sequence_label">2순위</label>
                <input type="radio" class="sequence" id="or3" name="sequence" value=3 />
                <label for="or3" name="sequence_label">3순위</label>
            </li>
            <li>
                <a href="main" id="prev">< 이전</a>
                <button id="submit">제출</button>
                <button id="reset" type="reset">내용지우기</button>
            </li>
        </ul>

    </form>
</div>
</body>
</html>
