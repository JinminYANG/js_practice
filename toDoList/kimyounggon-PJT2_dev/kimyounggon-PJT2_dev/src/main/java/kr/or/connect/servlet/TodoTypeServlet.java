package kr.or.connect.servlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.or.connect.Helper;
import kr.or.connect.dao.TodoDao;
import kr.or.connect.dto.TodoDto;

@WebServlet("/todo/type")
public class TodoTypeServlet extends HttpServlet {
	@Override
	protected void service(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws IOException {
		if (!"PATCH".equals(httpServletRequest.getMethod())) {
			httpServletResponse.sendRedirect("/todolist/method_error.html");
			return;
		}

		TodoDto updateTodoDto = readTodoDto(httpServletRequest);

		updateType(updateTodoDto);

		int resultValue = TodoDao.getInstance().updateTodo(updateTodoDto);

		httpServletResponse.setContentType("application/json");
		PrintWriter printWriter = httpServletResponse.getWriter();

		if (resultValue > 0) {
			printWriter.print("success");
		} else {
			printWriter.print("fail");
		}

		printWriter.close();
	}

	private TodoDto readTodoDto(HttpServletRequest httpServletRequest) throws IOException {
		TodoDto newTodoDto = null;

		try (InputStreamReader inputStreamReader = new InputStreamReader(httpServletRequest.getInputStream());
			BufferedReader bufferedReader = new BufferedReader(inputStreamReader)) {

			newTodoDto = Helper.getObjectMapper().readValue(bufferedReader.readLine(), TodoDto.class);
		}

		return newTodoDto;
	}

	private void updateType(TodoDto todoDto) {
		switch (todoDto.getType()) {
			case "TODO":
				todoDto.setType("DOING");
				return;
			case "DOING":
				todoDto.setType("DONE");
				return;
		}
	}
}
