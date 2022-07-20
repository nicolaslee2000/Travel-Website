package com.teamapp.travelsite.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/api")

public class ApiController {
	
	@GetMapping("/")
	public String hello() {
		return "hello world";
	}
}
