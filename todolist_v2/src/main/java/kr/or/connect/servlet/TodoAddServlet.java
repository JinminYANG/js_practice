package kr.or.connect.servlet;

import kr.or.connect.Helper;
import kr.or.connect.dao.TodoDao;
import kr.or.connect.dto.TodoDto;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

@WebServlet("/todo")
public class TodoAddServlet extends HttpServlet {
	protected void doPost(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws IOException {
		TodoDto newTodoDto = readTodoDto(httpServletRequest);

		int resultValue = TodoDao.getInstance().addTodo(newTodoDto);

		if (resultValue == 1) {
			httpServletResponse.sendRedirect("main");
		} else if (resultValue == 0) {
			httpServletResponse.setStatus(205);
		}
	}

	private TodoDto readTodoDto(HttpServletRequest httpServletRequest) throws IOException {
		TodoDto newTodoDto = null;

		try (InputStreamReader inputStreamReader = new InputStreamReader(httpServletRequest.getInputStream());
			BufferedReader bufferedReader = new BufferedReader(inputStreamReader)) {

			newTodoDto = Helper.getObjectMapper().readValue(bufferedReader.readLine(), TodoDto.class);
		}

		return newTodoDto;
	}
}
