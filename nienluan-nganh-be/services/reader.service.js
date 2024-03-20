const { ObjectId } = require('mongodb');

class readerService{
    constructor(client) {
        this.reader =  client.db().collection("docgia");
    }

    extractConactData(payload) {
        const docgia = {
            madg: payload.madg,
            hotendg: payload.hotendg,
            matkhau: payload.matkhau,
            email: payload.email,
            sodt: payload.sodt,
        }        
    }
}
module.exports = readerService;