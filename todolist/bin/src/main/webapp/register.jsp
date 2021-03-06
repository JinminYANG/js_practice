<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>할일 등록</title>
    <link rel="stylesheet" href="css/newtodo.css" />
    <!-- <script src="js/newtodo_v2.js" defer></script> -->
</head>
<body>
<div id="wrap">
    <form action="register.php" id="register" >
        <!-- name="register" id="register"  method="POST" action="register.php" send="AJAXSubmit(this); return false;" -->
        <h1 id="title">할일 등록</h1>

        <ul>
            <li>
                <label for="what" name="question">어떤일인가요?</label>
                <input type="text" id="what" placeholder="swift 공부하기(24자까지)" required maxlength="24" name="what"/>
            </li>
            <li>
                <label for="who" name="question">누가 할일인가요?</label>
                <input type="text" id="who" placeholder="홍길동" required name="who"/>
            </li>
            <li>
                <label for="orderRadio" name="question">우선순위를 선택하세요</label>
                <input type="radio" class="order" id="or1" name="order" value="1순위" required/>
                <label for="or1"  name="orl">1순위</label>
                <input type="radio" class="order" id="or2" name="order" value="2순위" />
                <label for="or2" name="orl">2순위</label>
                <input type="radio" class="order" id="or3" name="order" value="3순위" />
                <label for="or3" name="orl">3순위</label>
            </li>
            <li>
                <a href="index.html" id="prev">< 이전</a>
                <button type="submit">제출</button>
                <button type="reset">내용지우기</button>
            </li>
        </ul>

    </form>
</div>
</body>
</html>

<!--
    해야하는 것!!!!!
    1. 데이터보낼때 JSON
    2. onload에서 0(실패)과 1(성공)이 오는 것을 처리
-->



