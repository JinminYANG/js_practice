package kr.or.connect.exception;

public class DatabaseAccessException extends RuntimeException {
	private String message;
	
	public DatabaseAccessException(Exception daoException) {
		this.message = daoException.getMessage();
		this.setStackTrace(daoException.getStackTrace());
	}

	@Override
	public String getMessage() {
		return this.message;
	}
}
