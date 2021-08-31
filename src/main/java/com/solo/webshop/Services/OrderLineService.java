package com.solo.webshop.Services;

import com.solo.webshop.Entities.OrderLine;

import com.solo.webshop.Repositories.OrderLineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class OrderLineService {

    @Autowired
    OrderLineRepository orderLineRepository;

    public List<OrderLine> getOrderLinesByOrderId(int id){
        return (List<OrderLine>) orderLineRepository.getOrderLinesByOrderId(id);
    }

    public Optional<OrderLine> getOrderLineById(int id){
        return orderLineRepository.findById(id);

    }
    public OrderLine addOrderLine(OrderLine orderLine){
        return orderLineRepository.save(orderLine);
    }
    public void addOrderLines(List<OrderLine> orderlines){
        orderLineRepository.saveAll(orderlines);
    }

}
