package com.security.app.doa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.security.app.model.UserIssue;

public interface UserissueRepo extends JpaRepository<UserIssue, Integer> {

}
