const getHomePage = (req, res) => {
    res.send("Chao ban buikimquangloc");
};

const getAB =(req, res) => {
    res.send("Bây giờ đi học ngay!!");
};

const getCD = (req, res) => {
    res.send("Tôi chuẩn bị đi thực tập")
}

const getImg = (req, res) => {
    res.send()
}

module.exports = {
    getHomePage, 
    getAB,
    getCD
};

const bookService = require("../services/book.service");
const MongoDB = require("../config/connectDB");
const ApiError = require("../middleware/apiError");

exports.create = (req, res) => {
    res.send({message: "Tao moi "});
}
exports.fillAll = (req, res) => {
    res.send({message: "Tim tat ca "});
}
exports.update = (req, res) => {
    res.send({message: " cap nhat "});   
}
exports.delete = (req, res) => {
    res.send({message: "xoa"});
}
