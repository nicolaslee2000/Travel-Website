package com.teamapp.travelsite;

import com.teamapp.travelsite.Config.AppProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;


@EnableScheduling
// 지정시간마다 TempMail 스캔 후 만료된 메일을 삭제해주기 위해
@EnableJpaRepositories(basePackages = {"com.teamapp.travelsite.Model.Repository"})
//com.teamapp.travelsite.Model.Repository 하위에 있는 jpaRepository를 상속한 repository scan
@EntityScan(basePackages = {"com.teamapp.travelsite.Model.Entity"})
// com.teamapp.travelsite.Model.Entity 하위에 있는 @Entity 클래스 scan
@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class TravelsiteApplication {
	public static void main(String[] args) {
		SpringApplication.run(TravelsiteApplication.class, args);
	}

}
