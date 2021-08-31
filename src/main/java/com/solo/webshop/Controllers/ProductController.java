package com.solo.webshop.Controllers;

import com.solo.webshop.Entities.Product;
import com.solo.webshop.Services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("api/products")
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("api/products/{id}")
    public Optional<Product> getProductById(@PathVariable int id){
        return productService.getProductById(id);
    }

    @GetMapping("api/category/product/{id}")
    public List<Product> getAllProductsByCategoryId(@PathVariable int id) {
        return productService.getAllProductsByCategoryId(id);}

    @PostMapping("api/search")
    public List<Product> getProductsBySearch(String search){
        return productService.getProductsBySearch(search);
    }


}
