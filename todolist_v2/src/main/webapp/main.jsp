<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"
%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
    <title>나의 해야할 일들</title>
    <link rel="stylesheet" href="./css/index_v2.css?ver=1.1111111">
    <script defer type="text/javascript" src="./js/main.js?ver=1.1111111"></script>
</head>
<body>
<div id="wrap">
    <header>
        <h1 id="title">나의 해야할 일들</h1>
        <a id="register_button" href="register">새로운 TODO 등록</a>
    </header>
    <div id="todo_container">
        <section id="todo_list_header">
            <article>TODO</article>
            <article>DOING</article>
            <article>DONE</article>
        </section>
        <section id="todo_list_body">
            <section id="TODO" class="todo_item_container">
                <c:forEach items="${todoList}" var="todo">
                    <article>
                        <p class="todo_item_header">${todo.title}</p>
                        <p class="todo_item_contents">등록날짜:${todo.regDate}, ${todo.name}, 우선순위${todo.sequence}</p>
                        <button type="button" id="${todo.id}" class="update_button">→</button>
                    </article> 
                </c:forEach>
            </section>
            <section id="DOING" class="todo_item_container">
                <c:forEach items="${doingList}" var="doing">
                    <article>
                        <p class="todo_item_header">${doing.title}</p>
                        <p class="todo_item_contents">등록날짜:${doing.regDate}, ${doing.name}, 우선순위 ${doing.sequence}</p>
                        <button type="button" id="${doing.id}" class="update_button">→</button>
                    </article>
                </c:forEach>
            </section>
            <section id="DONE" class="todo_item_container">
                <c:forEach items="${doneList}" var="done">
                    <article id="${done.id}">
                        <p class="todo_item_header">${done.title}</p>
                        <p class="todo_item_contents">등록날짜:${done.regDate}, ${done.name}, 우선순위${done.sequence}</p>
                    </article>
                </c:forEach>
            </section>
        </section>
    </div>
</div>
</body>
</html>