package com.solo.webshop.Entities;

import javax.persistence.*;

@Entity
@Table(name="orders")
public class Order {


        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int id;

        private String ordernumber;
        private int timestamp;
        private String user_id;

    public Order() {
    }

    public Order(String ordernumber, int timestamp, String user_id) {
        this.ordernumber = ordernumber;
        this.timestamp = timestamp;
        this.user_id = user_id;
    }

    public int getId() {
        return id;
    }

    public String getOrdernumber() {
        return ordernumber;
    }

    public void setOrdernumber(String ordernumber) {
        this.ordernumber = ordernumber;
    }

    public int getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(int timestamp) {
        this.timestamp = timestamp;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", ordernumber='" + ordernumber + '\'' +
                ", timestamp=" + timestamp +
                ", user_id='" + user_id + '\'' +
                '}';
    }
}
