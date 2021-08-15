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

import com.security.app.model.Category;
import com.security.app.model.User;
import com.security.app.service.CategoryService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {

	@Autowired
	CategoryService service;
	
	@PostMapping(path="/insertcat",consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Category> insertcat(@RequestBody Category cat) {
	service.storecatUser(cat);
	return new ResponseEntity<Category>(cat,HttpStatus.OK);
	}
	
	
	  

	  @RequestMapping(path="/catvalid/{userid}/{password}",produces=MediaType.APPLICATION_JSON_VALUE)
	  public ResponseEntity<String> getBycatId(@PathVariable int userid,@PathVariable String password)
	  {
		  System.out.println(userid);
		  
	  @SuppressWarnings("unused")
	  HttpServletRequest request;
	  String s=null,p;
	  int a;
	  boolean state = false;
	  long x,b;
	  ResponseEntity<String> r = null;
	  Category catid= service.getCatId(userid);
	  Category catpa=service.getCatPw(password);
	  if(catid==null || catpa==null) {
	  s="User doesn't exist";
	  state=false;
	  r= new ResponseEntity<String>(s,HttpStatus.NOT_FOUND); 
	  }
	  else {
	  a=(int) catid.getUserid();
	  p=catpa.getPassword();
	  x=catid.getUserid();
	  b=catpa.getUserid();
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
