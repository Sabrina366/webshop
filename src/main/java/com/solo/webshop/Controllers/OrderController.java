package com.solo.webshop.Controllers;

import com.solo.webshop.Entities.Order;
import com.solo.webshop.Services.OrderLineService;
import com.solo.webshop.Services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class OrderController {

    @Autowired
    OrderService orderService;

    @Autowired
    OrderLineService orderLineService;

    @GetMapping("api/order/{id}")
    public Optional<Order> getOrderById(@PathVariable int id){
        return orderService.getOrderById(id);
    }

    @PostMapping("api/postorder")
    public void postOrder(Order order){
        orderService.addOrder(order);
    }
}
