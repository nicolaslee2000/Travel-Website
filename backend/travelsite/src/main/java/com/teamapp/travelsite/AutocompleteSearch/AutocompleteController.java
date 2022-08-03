package com.teamapp.travelsite.AutocompleteSearch;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AutocompleteController {
	
	@GetMapping("/search")
	public List<String> autocomplete() {
		
		List<String> list = new ArrayList<>();
		list.add("a");
		list.add("b");
		
		return list;
	}
}
