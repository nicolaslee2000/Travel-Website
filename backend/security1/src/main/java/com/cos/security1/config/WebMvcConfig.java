package com.cos.security1.config;

import org.springframework.boot.web.servlet.view.MustacheViewResolver;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {	// Mustache를 오버라이딩해서 재설정 // .html를 .mustache로 이식하게 하기 위한 설정?
	
	@Override
	public void configureViewResolvers(ViewResolverRegistry registry) {
		MustacheViewResolver resolver = new MustacheViewResolver();
		resolver.setCharset("UTF-8");
		resolver.setContentType("text/html;charset=UTF-8");	//내가 만드는 타입은 html이지만 
		resolver.setPrefix("classpath:/templates/");
		resolver.setSuffix(".html");	//너는 mustache로 이해해라
		
		registry.viewResolver(resolver);
		
	}
	
}
