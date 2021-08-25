package com.solo.webshop.Services;

import com.solo.webshop.Entities.Category;
import com.solo.webshop.Repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    public List<Category> getAllCategories(){ return (List<Category>)categoryRepository.findAll();}

}
