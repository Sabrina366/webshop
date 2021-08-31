package com.solo.webshop.Controllers;

import com.solo.webshop.Entities.Order;
import com.solo.webshop.Services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class OrderController {

    @Autowired
    OrderService orderService;

    @GetMapping("api/order/{id}")
    public Optional<Order> getOrderById(@PathVariable int id){
        return orderService.getOrderById(id);
    }

    @PostMapping("api/postorder")
    public Order postOrder(Order order){
        return orderService.addOrder(order);
    }
}
