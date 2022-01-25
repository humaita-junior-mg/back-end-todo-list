const router = require('express').Router()
const newuser = require('../controller/userController');

router.post('/users', newuser);

module.exports = router