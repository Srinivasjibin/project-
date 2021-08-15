package com.security.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.app.doa.CategoryRepo;
import com.security.app.model.Category;


@Service
public class CategoryService {
	@Autowired
	CategoryRepo repo;
	public Category storecatUser(Category cat)
	{
		repo.save(cat);
		return cat;
	}
	public List<Category> getcatUser()
	{
		List<Category> cat=repo.findAll();
		return cat;
		}
	public Category getCatId(int userid) 
		{
		Category cat=repo.findById(userid).orElse(new Category());
		return cat;
		}
	public Category getCatPw(String password)
		{ 
		Category cat=repo.findByPassword(password);
		return cat; 
		}

	
}
