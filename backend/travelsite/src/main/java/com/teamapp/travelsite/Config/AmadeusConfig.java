package com.teamapp.travelsite.Config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;

import lombok.Data;

@Configuration
@PropertySources(value = {@PropertySource("classpath:amadeus.properties")})
@ConfigurationProperties(prefix = "travel-service")
@Data
public class AmadeusConfig {
	
	private String apiKey;
	
	private String apiSecret;
	
	private String mode;


	@Bean
	public static PropertySourcesPlaceholderConfigurer propertySourcesPlaceholderConfigurer() {
		return new PropertySourcesPlaceholderConfigurer();
	}
}
 