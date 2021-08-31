package com.solo.webshop.Services;

import com.solo.webshop.Entities.Product;
import com.solo.webshop.Entities.User;
import com.solo.webshop.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> getAllUsers(){
        return (List<User>)userRepository.findAll();
    }
    public Optional<User> getUsersById(int id){
        return userRepository.findById(id);
    }

}
