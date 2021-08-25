package com.solo.webshop.Controllers;

import com.solo.webshop.Entities.Category;
import com.solo.webshop.Entities.Product;
import com.solo.webshop.Services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping("api/categories")
    public List<Category> getAllCategories(){ return categoryService.getAllCategories(); }

}
