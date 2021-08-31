package com.solo.webshop.Controllers;

import com.solo.webshop.Entities.Order;
import com.solo.webshop.Entities.OrderLine;
import com.solo.webshop.Services.OrderLineService;
import com.solo.webshop.Services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class OrderLineController {

    @Autowired
    OrderLineService orderLineService;

    @Autowired
    OrderService orderService;

    @PostMapping("/api/items")
    public void addOrderLines( @RequestBody List<OrderLine> orderLines) {
        orderLineService.addOrderLines(orderLines);
    }
}
