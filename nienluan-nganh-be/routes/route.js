const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello, world!");
})

router.get('/loc', (req, res) => {
    res.send("Hello, world!ahiii");
})
router.get('/locc', (req, res) => {
    res.send("Chao ban buikimquangloc");
})

module.exports = router;