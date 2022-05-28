const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/user');

router.post('/login', userControllers.login_user);

module.exports = router;