package com.solo.webshop.Controllers;

import com.solo.webshop.Entities.Order;
import com.solo.webshop.Entities.OrderLine;
import com.solo.webshop.Services.OrderLineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderLineController {

    @Autowired
    OrderLineService orderLineService;

    /*@PostMapping("/api/items")
    public ResponseEntity<OrderLine> addOrderLines(@RequestBody <OrderLine> orderLines){
        Order order = new Order();
        orderLineService.addOrderLines(orderLines);

        return order;
    }*/
}
