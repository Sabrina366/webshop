package com.solo.webshop.Entities;

import javax.persistence.*;

@Entity
@Table(name="products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;
    private String description;
    private double price;
    private String img;

    @ManyToOne
    @JoinColumn(name="category_id", referencedColumnName = "id", nullable=false)
    private Category category;


    public Product() {
    }

    public int getId() {
        return id;
    }

    public Product(String title, String description, double price, String img, Category category) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.img = img;
        this.category = category;
    }

    public Product(String title, String description, double price, String img) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.img = img;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", img='" + img + '\'' +
                ", category=" + category +
                '}';
    }
}
