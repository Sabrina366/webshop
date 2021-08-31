package com.solo.webshop.Repositories;

import com.solo.webshop.Entities.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends CrudRepository<Product, Integer>{

    @Query(value = "SELECT * FROM products u WHERE u.category_id = :id",
            nativeQuery = true)
    List<Product> getAllProductsByCategoryId(@Param("id") int id);

    @Query(value = "SELECT * FROM products u WHERE u.title LIKE '%:search%'",
            nativeQuery = true)
    List<Product> getAllProductsBySearch(@Param("search") String search);

}
