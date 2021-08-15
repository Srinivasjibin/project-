package com.security.app.doa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.security.app.model.User;

public interface IssueRepo extends JpaRepository<User,Integer> {
	
	User findByPassword(String password);


	 
	 

}
