package com.solo.webshop.Controllers;

import com.solo.webshop.Entities.User;
import com.solo.webshop.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("api/user/{id}")
    public Optional<User> getUserById(@PathVariable int id){
        return userService.getUsersById(id);
    }
}
