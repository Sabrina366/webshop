package com.solo.webshop.Services;

import com.solo.webshop.Entities.Order;
import com.solo.webshop.Entities.OrderLine;
import com.solo.webshop.Repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    OrderLineService orderLineService;
    @Autowired
    OrderRepository orderRepository;

    public Optional<Order> getOrderById(int id){
        return orderRepository.findById(id);
    }

    public Order addOrder(Order order){
        return orderRepository.save(order);
    }

    /*public Order addOrderLineToOrder(int orderId, int orderLineId){
        Order order = getOrderById(orderId);
        OrderLine orderline = orderLineService.getOrderLineById(orderLineId);
        return Order;
    }*/
}
