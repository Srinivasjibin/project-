package com.security.app.doa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.security.app.model.Admin;


public interface AdminRepo extends JpaRepository<Admin,Integer>{

	Admin findByPassword(String password);
}
