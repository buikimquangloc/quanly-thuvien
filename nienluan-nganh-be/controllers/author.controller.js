const authorService = require("../services/author.service");
const MongoDB = require("../config/connectDB");
const ApiError = require("../middleware/apiError");

exports.create = (req, res) => {
    res.send({message: "Tao moi "});
}
exports.fillAll = (req, res) => {
    res.send({message: "Tim tat ca "});
}
// exports.update = (req, res) => {
//     res.send({message: " cap nhat "});   
// }
// exports.delete = (req, res) => {
//     res.send({message: "xoa"});
// }
exports.deleteAll = (req, res) => {
    res.send({message: "xoa tat ca "});
}
