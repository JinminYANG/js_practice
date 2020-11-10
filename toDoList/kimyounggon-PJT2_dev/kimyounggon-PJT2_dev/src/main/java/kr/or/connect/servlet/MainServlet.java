package kr.or.connect.servlet;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.or.connect.dao.TodoDao;
import kr.or.connect.dto.TodoDto;

@WebServlet("/main")
public class MainServlet extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws ServletException, IOException {
		List<TodoDto> todoListInDataBase = TodoDao.getInstance().getTodoDtoList();

		List<TodoDto> todoList = new ArrayList<>();
		List<TodoDto> doingList = new ArrayList<>();
		List<TodoDto> doneList = new ArrayList<>();

		for (TodoDto todoDto : todoListInDataBase) {
			switch (todoDto.getType()) {
				case "TODO":
					todoList.add(todoDto);
					break;
				case "DOING":
					doingList.add(todoDto);
					break;
				case "DONE":
					doneList.add(todoDto);
					break;
			}
		}

		httpServletRequest.setAttribute("todoList", todoList);
		httpServletRequest.setAttribute("doingList", doingList);
		httpServletRequest.setAttribute("doneList", doneList);

		RequestDispatcher requestDispatcher = httpServletRequest.getRequestDispatcher("main.jsp");
		requestDispatcher.forward(httpServletRequest, httpServletResponse);
	}
}