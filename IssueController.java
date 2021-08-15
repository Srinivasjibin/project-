package com.security.app.controller;

import java.util.List;


import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.security.app.model.User;
import com.security.app.service.IssueService;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class IssueController {

	@Autowired
	IssueService service;
	
	@RequestMapping(path="/user1")
	public User storeUser(User user)
	{
		System.out.println(user);
		service.storeUser(user);
		 return user;
	}
	@PostMapping(path="/insert",consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> inserts(@RequestBody User user) {
	service.storeUser(user);
	return new ResponseEntity<User>( user,HttpStatus.OK);
	}
	 
  @GetMapping(path="/get",produces=MediaType.APPLICATION_JSON_VALUE)
   public ResponseEntity<List<User>> showUser() 
   {
     List<User> user=service.getUser();
     return new ResponseEntity<List<User>>(user,HttpStatus.OK); 
   }
  @GetMapping(path="/get/{userid}")
	public ResponseEntity<User> getByuserId(@PathVariable int userid)
	{
	User user=service.getUserId(userid);
	  return new ResponseEntity<User>(user,HttpStatus.OK);
	}

  @RequestMapping(path="/valid/{userid}/{password}",produces=MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<String> getByuserId(@PathVariable int userid,@PathVariable String password)
  {
  @SuppressWarnings("unused")
  HttpServletRequest request;
  String s=null,p;
  int a;
  boolean state = false;
  long x,b;
  ResponseEntity<String> r = null;
  User em= service.getUserId(userid);
  User pw=service.getUserPw(password);
  if(em==null || pw==null) {
  s="User doesn't exist";
  state=false;
  r= new ResponseEntity<String>(s,HttpStatus.NOT_FOUND); 
  }
  else {
  a=(int) em.getUserid();
  p=pw.getPassword();
  x=em.getUserid();
  b=pw.getUserid();
  if(x==b) {
  if(a==0 || p==null) {
  s="User doesn't exist";
  state=false;
  r= new ResponseEntity<String>(s,HttpStatus.NOT_FOUND);
  }
  else if(a==userid && p.equals(password)) {
  s="Login successful";
  state=true;
  r= new ResponseEntity<String>(s,HttpStatus.OK);
  }
  }
  else {
  s="Registered details doesn't match";
  state=false; 
  r= new ResponseEntity<String>(s,HttpStatus.NOT_FOUND);
  }
  }
  return r;
  }
  
}
	
	

