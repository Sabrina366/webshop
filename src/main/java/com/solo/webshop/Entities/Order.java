package com.solo.webshop.Entities;

import javax.persistence.*;
import javax.print.attribute.standard.DateTimeAtCreation;
import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="orders")
public class Order{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private Instant timestamp;

   /* @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;*/

    @OneToMany(mappedBy = "order",  cascade = CascadeType.PERSIST)
    private List<OrderLine> orderLines = new ArrayList<>();

    public Order() {
    }

    public Order(Instant timestamp, /*User user, */List<OrderLine> orderLines) {
        this.timestamp = timestamp;
        /*this.user = user;*/
        this.orderLines = orderLines;
    }

    public int getId() {
        return id;
    }

    public Instant getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(int timestamp) {
        this.timestamp = Instant.now();
    }
/*
    public User getUser() {
        return user;
    }

    public void addUser(User user) {
        this.user = user;
    }*/

    public void addOrderLine(OrderLine orderLine){
        orderLines.add(orderLine);
        orderLine.setOrder(this);
    }

    @Override
    public String toString() {
        return "Orders{" +
                "id=" + id +
                ", orderNumber=" +
                ", timestamp=" + timestamp +
                '}';
    }
}
