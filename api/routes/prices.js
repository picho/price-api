const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Price = require('../models/price');

router.get('/', (req, res, next) => {

    Price.find()
    .then((prices) => {
        res.status(200).json(prices);
    })
    .catch(() => {
        res.status(500).json({message: 'error retrieving the prices'});
    });
});

router.get('/:priceId', (req, res, next) => {

    const priceId = req.params.priceId;

    Price.findById(priceId)
    .then((priceFound) => {
        if(priceFound)
            res.status(200).json(priceFound);
        else
            res.status(404).json({message: "no valid price was found"});
    })
    .catch((err) => {
        res.status(500).json({error:err});
    });
});

router.post('/', (req, res, next) => {
    
    const price = new Price({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        value: req.body.value
    });

    price.save()
    .then(result => {
        res.status(201).json({
            message: "The price was created",
            createdPrice: price
        });
    })
    .catch(err => {
        res.status(500).json({
            message: "There was a problem creating the price",
            createdPrice: null
        });
    });
});

router.patch('/:priceId', (req, res, next) => {
    
    const priceId = req.params.priceId;

    Price.update({_id: priceId}, {$set: {name: req.body.newName, price: req.body.newPrice}})
    .then((updatedPrice) => {
        res.status(200).json(updatedPrice);
    }).catch((err) => {
        res.status(500).json({error: err});
    });
    
});

router.delete('/:priceId', (req, res, next) => {
    
    const priceId = req.params.priceId;
    
    Price.remove({_id: priceId}).
    then((result) => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json({error: err});
    })
});


module.exports = router;