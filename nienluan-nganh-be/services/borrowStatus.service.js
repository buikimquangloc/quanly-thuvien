const { ObjectId } = require('mongodb');

class borrowstatusService{
    constructor(client) {
        this.borrowstatus =  client.db().collection("quanlytrangthai");
    }

    extractConactData(payload) {
        const quanlytrangthai = {
            mamuon: payload.mamuon,
            madg: payload.madg,
            trangthai: payload.trangthai
        }        
    }
}
module.exports = borrowstatusService;