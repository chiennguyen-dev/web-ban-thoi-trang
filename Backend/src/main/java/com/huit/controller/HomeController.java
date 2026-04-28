package com.huit.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

	@GetMapping("/")
	public Map<String, Object> home() {
		Map<String, Object> res = new HashMap<>();
		res.put("message", "welcome to ecommerce backend system");
		res.put("status", true);

		return res;
	}
}
