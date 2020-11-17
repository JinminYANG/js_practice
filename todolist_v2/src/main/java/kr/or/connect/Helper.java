package kr.or.connect;

import com.fasterxml.jackson.databind.ObjectMapper;

public class Helper {
	private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

	public static ObjectMapper getObjectMapper() {
		return OBJECT_MAPPER;
	}
}
