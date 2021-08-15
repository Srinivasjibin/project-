package com.security.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.security.app.model.UserIssue;
import com.security.app.service.UserissueService;

@RestController
@CrossOrigin(origins = "http://localhost:3000") 
class UserissueController {
 
	
	@Autowired
	UserissueService service;

	@PostMapping(path="/insertIssues",consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<UserIssue> inserts(@RequestBody UserIssue userissue) 
	{
	service.storeUserissue(userissue);
	return new ResponseEntity<UserIssue>( userissue,HttpStatus.OK);
	}
	@GetMapping(path="/getIssues",produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<UserIssue>> showIssue()
	{
	List<UserIssue> userissue=service.getUserissue();
	return new ResponseEntity<List<UserIssue>>(userissue,HttpStatus.OK);
	}
	}
   
 

