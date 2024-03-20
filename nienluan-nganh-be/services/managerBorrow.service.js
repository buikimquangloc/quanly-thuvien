const { ObjectId } = require('mongodb');

class managerborrowService{
    constructor(client) {
        this.managerborrow =  client.db().collection("quanlymuonsach");
    }

    extractConactData(payload) {
        const quanlymuonsach = {
            mamuon: payload.mamuon,
            madg: payload.madg,
            masach: payload.masach,
            ngaymuon: payload.ngaymuon,
            // ngaytra: payload.ngaytra,
            soluongmuon: payload.soluongmuon
        }        
    }
}
module.exports = managerborrowService;