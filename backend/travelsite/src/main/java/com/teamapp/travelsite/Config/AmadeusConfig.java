package com.teamapp.travelsite.Config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;

import lombok.Data;

@Configuration
@PropertySource(value="amadeus.properties")
@ConfigurationProperties(prefix = "travel-service")
@Data
public class AmadeusConfig {
	
	private String apiKey;
	
	private String apiSecret;

	@Bean
	public static PropertySourcesPlaceholderConfigurer propertySourcesPlaceholderConfigurer() {
		return new PropertySourcesPlaceholderConfigurer();
	}
}
 