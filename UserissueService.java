package com.security.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.app.doa.UserissueRepo;
import com.security.app.model.UserIssue;

@Service
public class UserissueService {
	 @Autowired
	    UserissueRepo repo;
	    public UserIssue storeUserissue(UserIssue userissue) {
	      repo.save(userissue);
	      return userissue;
	     }
	   public List<UserIssue> getUserissue(){
	   List<UserIssue> userissue=repo.findAll();
	   return userissue;
	   }

}
