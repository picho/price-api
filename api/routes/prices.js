const express = require('express');
const router = express.Router();

const CheckAuth = require('../middleware/CheckAuth');

const pricesControllers = require('../controllers/prices');

router.get('/', pricesControllers.prices_get_all);

router.get('/:priceId', pricesControllers.get_price_byId);

router.post('/', CheckAuth, pricesControllers.create_price);

router.patch('/:priceId', CheckAuth, pricesControllers.update_price);

router.delete('/:priceId', CheckAuth, pricesControllers.delete_price);

module.exports = router;