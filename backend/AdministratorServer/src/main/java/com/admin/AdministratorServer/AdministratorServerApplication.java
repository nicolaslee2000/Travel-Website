package com.admin.AdministratorServer;

import de.codecentric.boot.admin.server.config.EnableAdminServer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAdminServer
public class AdministratorServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(AdministratorServerApplication.class, args);
	}

}
