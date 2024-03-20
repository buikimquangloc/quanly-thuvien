const express = require('express');
const { getHomePage, getAB, getCD } = require('../controllers/book.controller');
const router = express.Router();

router.get('/', getCD)

router.get('/loc', getAB)

router.get('/locc', getHomePage)

module.exports = router;