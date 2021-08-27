package com.solo.webshop.Services;

import com.solo.webshop.Entities.Product;
import com.solo.webshop.Repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public List <Product> getAllProducts(){
        return (List<Product>)productRepository.findAll();
    }
    public Optional<Product> getProductById(int id){
        return productRepository.findById(id);
    }

    public List<Product> getAllProductsByCategoryId(int id){
        return productRepository.getAllProductsByCategoryId(id);
    }
}
