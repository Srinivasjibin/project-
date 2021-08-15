package com.security.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.app.doa.AdminRepo;
import com.security.app.model.Admin;
import com.security.app.model.User;

@Service
public class AdminService {


	@Autowired
	AdminRepo repo;
	
	public Admin getUserId(int userid) 
	{
	Admin admin=repo.findById(userid).orElse(new Admin());
	return admin;
	}
}
