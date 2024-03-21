const express = require('express');
const author = require("../controllers/author.controller");
const router = express.Router();

router.get("/", author.fillAll);
router.post("/", author.create);
router.delete("/", author.deleteAll);
// router.put("/", bookController.update);

module.exports = router;