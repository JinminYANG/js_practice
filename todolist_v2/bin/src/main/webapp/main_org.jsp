<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<%-- JSP는 자체로 동작하는 것이 아니라 서블릿으로 바뀌어서 동작한다--%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>To Do List 구현</title>
    <link rel="stylesheet" href="css/index.css">
    <!-- <script src="js/newtodo.js"></script> -->
</head>
<body>
<div id="wrap">
    <h1>나의 해야할 일들</h1>
    <a href="register" id="newBtn">새로운 TODO 등록</a>

    <div id="mainVisual">
        <div class="todo list">
            <h2 class="title">TODO</h2>
            <!-- <div class="study">
                <h3 class="studyTitle">자바스크립트 공부하기</h3>
                <span class="studyDate">등록날짜: 2018.03.10, </span>
                <span class="studyWhoName">홍길동, </span>
                <span class="orderNumber">우선순위 1</span>
                <button>→</button>
            </div> -->
            <%
            int total = 0;
            for(int i =1; i <= 10; i++){
                total = total + 1;
            }

            %>

            1부터 10까지 합 : <%=total %>


        </div>

        <div class="doing list">
            <h2 class="title">DOING</h2>

        </div>

        <div class="done list">
            <h2 class="title">DONE</h2>

        </div>
    </div>

</div>

</body>
</html>