const { ObjectId } = require('mongodb');

class bookService{
    constructor(client) {
        this.book =  client.db().collection("sach");
    }

    extractConactData(payload) {
        const sach = {
            masach: payload.masach,
            tensach: payload.tensach,
            matg: payload.matg,
            matl: payload.matl,
            makesach: payload.makesach,
            manxb: payload.manxb,
            soluong: payload.soluong,
            mamuon: payload.mamuon,
        }      
        
        Objects.keys(sach).forEach(
            (key) => sach[key] === undefined && delete sach[key]
            );
            return sach;
    }
}
module.exports = bookService;