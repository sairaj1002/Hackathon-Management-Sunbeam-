package com.backend.config;

import org.modelmapper.Conditions;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperConfig {
	/*
	 * configure ModelMapper as spring bean
	 * <bean id class ...../>
	 * Add @Bean annotated method to return ModelMapper instance - to be managed by SC
	 */
	//configure mapper - to transfer the matching props (name + data type)
	
    @Bean
    ModelMapper modelMapper() {

        ModelMapper mapper = new ModelMapper();

        mapper.getConfiguration()
              	//configure mapper - to transfer the matching props (name + data type)
              .setMatchingStrategy(MatchingStrategies.STRICT)
      			//configure mapper - not to transfer nulls from src -> dest
              .setPropertyCondition(Conditions.isNotNull());
        	
          //Method rets configured ModelMapper bean to SC
        return mapper;
    }

    
}