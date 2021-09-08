const express = require('express');
const router = express.Router();
const {database} = require('../Config/database');

router.get('/:userId', (req, res) => {
let userId = req.params.userId
    
    database.table('orderlines as ol')
        .join([
            {
                table: 'orders as o',
                on: 'o.id = ol.order_id'
            },
            {
                table: 'products as p',
                on: 'p.id = ol.product_id'
            },
            {
                table: 'user as u',
                on: `u.id = o.user_id WHERE user_id = ${userId}`
            }
        ])
        .withFields(['o.id', 'p.title', 'p.description', 'p.price', 'u.email'])
        .getAll()
        .then(orders => {
            if (orders.length > 0) {
                res.json(orders);
            } else {
                res.json({message: "No orders found"});
            }

        }).catch(err => res.json(err));
});

router.post('/add', async (req, res) => {
    let {id, cart} = req.body;
    console.log(id);
    console.log(cart);

     if (id !== null && id > 0) {
        database.table('orders')
            .insert({
                user_id: id
            }).then((order) => {
                console.log(order.insertId)
            if (order.insertId > 0) {
                cart.forEach(async (c) => {
                        console.log(c.id)
                        let data = await database.table('products').filter({id: c.id}).withFields(['in_stock']).get();
                            
                    // subtracting from in_stock for purchased products
                    if (data.in_stock > 0) {
                        data.in_stock = data.in_stock - c.quantity;

                        if (data.in_stock < 0) {
                            data.in_stock = 0;
                        }

                    } else {
                        data.in_stock = 0;
                    }

                    //insert orderlines with order id
                    database.table('orderlines')
                        .insert({
                            product_id: c.id,
                            order_id: order.insertId,
                            quantity: c.quantity,
                            unit_price: c.price
                        }).then(newId => {
                        database.table('products')
                            .filter({id: c.id})
                            .update({
                                in_stock: data.in_stock
                            }).then(successNum => {
                        }).catch(err => console.log(err));
                    }).catch(err => console.log(err));
                });
            } else {
                res.json({message: 'Placing an order failed while adding order details', success: false});
            }
            res.json({
                message: `Order successfully placed with order id ${order.insertId}`,
                success: true,
                order_id: order.insertId,
                products: cart
            })
        }).catch(err => res.json(err));
    }

    else {
        res.json({message: 'Placeing an order failed', success: false});
    }

});

module.exports = router;