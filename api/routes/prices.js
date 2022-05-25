const express = require('express');
const router = express.Router();

const pricesControllers = require('../controllers/prices');

router.get('/', pricesControllers.prices_get_all);

router.get('/:priceId', pricesControllers.get_price_byId);

router.post('/', pricesControllers.create_price);

router.patch('/:priceId', pricesControllers.update_price);

router.delete('/:priceId', pricesControllers.delete_price);

module.exports = router;