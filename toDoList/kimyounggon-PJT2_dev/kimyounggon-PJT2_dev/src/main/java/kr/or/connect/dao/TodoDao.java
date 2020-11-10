package kr.or.connect.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import kr.or.connect.dto.TodoDto;
import kr.or.connect.exception.DatabaseAccessException;

public class TodoDao {
	private final String DATABASE_URL = "jdbc:mysql://10.113.116.52:13306/user01";
	private final String DATABASE_USER = "user01";
	private final String DATABASE_PASSWORD = "user01";

	private static final TodoDao SINGLETON_TODO_DAO = new TodoDao();

	private TodoDao() {
		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException classNotFoundException) {
			throw new DatabaseAccessException(classNotFoundException);
		}
	}

	public static TodoDao getInstance() {
		return SINGLETON_TODO_DAO;
	}

	public List<TodoDto> getTodoDtoList() {
		List<TodoDto> todoDtoList = new ArrayList<>();

		try (Connection connection = DriverManager.getConnection(DATABASE_URL, DATABASE_USER, DATABASE_PASSWORD);
			PreparedStatement preparedStatement = connection.prepareStatement("SELECT id, title, name, sequence, type, date_format(regdate, \"%Y-%m-%d\") as regdate FROM todo");
			ResultSet resultSet = preparedStatement.executeQuery()) {

			while (resultSet.next()) {
				long id = resultSet.getLong("id");
				int sequence = resultSet.getInt("sequence");
				String name = resultSet.getString("name");
				String title = resultSet.getString("title");
				String type = resultSet.getString("type");
				String regDate = resultSet.getString("regDate");
				TodoDto todoDto = new TodoDto(id, name, regDate, sequence, title, type);
				todoDtoList.add(todoDto);
			}
		} catch (SQLException sqlException) {
			throw new DatabaseAccessException(sqlException);
		}

		return todoDtoList;
	}

	public int addTodo(TodoDto todoDto) {
		int resultValue = 0;

		try (Connection connection = DriverManager.getConnection(DATABASE_URL, DATABASE_USER, DATABASE_PASSWORD);
			PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO todo(title, name, sequence) VALUES(?, ?, ?)")) {

			preparedStatement.setString(1, todoDto.getTitle());
			preparedStatement.setString(2, todoDto.getName());
			preparedStatement.setInt(3, todoDto.getSequence());

			resultValue = preparedStatement.executeUpdate();

		} catch (SQLException sqlException) {
			throw new DatabaseAccessException(sqlException);
		}

		return resultValue;
	}

	public int updateTodo(TodoDto todoDto) {
		int resultValue = 0;

		try (Connection connection = DriverManager.getConnection(DATABASE_URL, DATABASE_USER, DATABASE_PASSWORD);
			PreparedStatement preparedStatement = connection.prepareStatement("UPDATE todo SET type = ? WHERE id = ?")) {

			preparedStatement.setString(1, todoDto.getType());
			preparedStatement.setLong(2, todoDto.getId());

			resultValue = preparedStatement.executeUpdate();

		} catch (SQLException sqlException) {
			throw new DatabaseAccessException(sqlException);
		}

		return resultValue;
	}
}