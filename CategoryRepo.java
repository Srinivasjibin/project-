package com.security.app.doa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.security.app.model.Category;
import com.security.app.model.User;

public interface CategoryRepo  extends JpaRepository<Category,Integer> {
	
	Category findByPassword(String password);


}
