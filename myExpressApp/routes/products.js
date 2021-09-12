const express = require('express');
const router = express.Router();
const {database} = require('../Config/database');

router.get('/categories', (req,res) => {
    
    database.table('categories').withFields(['name', 'id']).getAll().then(cat => {
        console.log(cat);
        if (cat) {
            res.status(200).json(cat);
        } else {
            res.status(404).json({message: `No categories found`});
        }
    }).catch(err => res.json(err));

})

/* get one product by search query*/
router.get('/search', (req, res) => {
    
    database.table('products as p')
        .join([
            {
                table: "categories as c",
                on: `c.id = p.category_id`
            }
        ])
        .withFields(['c.name as category',
            'p.id',
            'p.title',
            'p.price',
            'p.description',
            'p.img',
        ])
        .filter({ title: {$like: `%${req.query.title}%` }})
        .getAll()
        .then(prod => {
            if (prod.length !== 0) {
                console.log(prod.length + " längd")
                res.status(200).json(prod);
            } else {
                res.status(404).json({message: `No product found with id ${productId}`});
            }
        }).catch(err => res.json(err));
});

router.get('/category/:id', (req, res) => { 

    const cat_id = req.params.id;

    database.table('products as p')
        .join([
            {
                table: "categories as c",
                on: `c.id = p.category_id WHERE c.id = ${cat_id}`
            }
        ])
        .withFields(['c.name as category',
            'p.id',
            'p.title',
            'p.price',
            'p.description',
            'p.img'       
        ])
        .getAll()
        .then(prods => {
            if (prods.length !== 0) {
                res.status(200).json(prods);
            } else {
                res.status(404).json({message: `No products found matching the category ${cat_id}`});
            }
        }).catch(err => res.json(err));
});

/* get all products from one category by id*/
router.get('/category/:id', (req, res) => { 

    const cat_id = req.params.id;

    database.table('products as p')
        .join([
            {
                table: "categories as c",
                on: `c.id = p.category_id WHERE c.id = ${cat_id}`
            }
        ])
        .withFields(['c.name as category',
            'p.id',
            'p.title',
            'p.price',
            'p.description',
            'p.img'       
        ])
        .getAll()
        .then(prods => {
            if (prods.length > 0) {
                res.status(200).json(prods);
            } else {
                res.status(404).json({message: `No products found matching the category ${cat_id}`});
            }
        }).catch(err => res.json(err));
});


module.exports = router;