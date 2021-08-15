package com.security.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.app.doa.IssueRepo;
import com.security.app.model.User;



@Service
public class IssueService {
	
	@Autowired
	IssueRepo repo;
	public User storeUser(User user)
	{
		repo.save(user);
		return user;
	}
	public List<User> getUser()
	{
		List<User> user=repo.findAll();
		return user;
		}
	public User getUserId(int userid) 
		{
		User user=repo.findById(userid).orElse(new User());
		return user;
		}
	public User getUserPw(String password)
		{ 
		User user=repo.findByPassword(password);
		return user; 
		}
		

}
