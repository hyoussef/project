package com.hn.service.model.jackson.config;

import org.codehaus.jackson.map.DeserializationConfig;
import org.codehaus.jackson.map.SerializationConfig;

import org.codehaus.jackson.map.ObjectMapper;

public class JacksonMapper extends ObjectMapper {

	
	public JacksonMapper() {
		configure(SerializationConfig.Feature.AUTO_DETECT_GETTERS, false);
		configure(SerializationConfig.Feature.AUTO_DETECT_FIELDS, false);
		configure(SerializationConfig.Feature.AUTO_DETECT_IS_GETTERS, false);
		configure(SerializationConfig.Feature.WRITE_NULL_MAP_VALUES, false);
		
		configure(DeserializationConfig.Feature.FAIL_ON_UNKNOWN_PROPERTIES , false);
		configure(DeserializationConfig.Feature.AUTO_DETECT_FIELDS, false);
		configure(DeserializationConfig.Feature.AUTO_DETECT_SETTERS , false);
		

		
	}


}
