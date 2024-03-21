const express = require('express');
const book = require("../controllers/book.controller");
const router = express.Router();

router.get("/", book.fillAll);
router.post("/", book.create);
router.delete("/", book.deleteAll);
// router.put("/", bookController.update);

module.exports = router;