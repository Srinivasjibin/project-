package com.security.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.security.app.model.Admin;
import com.security.app.model.User;
import com.security.app.service.AdminService;
import com.security.app.service.IssueService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
	
	@Autowired
       AdminService service;

	@GetMapping(path="/getadmin/{userid}")
	public ResponseEntity<Admin> getById(@PathVariable int userid)
	{
  Admin admin=service.getUserId(userid);
	  return new ResponseEntity<Admin>(admin,HttpStatus.OK);
	}
}
