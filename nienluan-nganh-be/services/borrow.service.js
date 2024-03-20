const { ObjectId } = require('mongodb');

class borrowService{
    constructor(client) {
        this.borrow =  client.db().collection("muonsach");
    }

    extractConactData(payload) {
        const muonsach = {
            mamuon: payload.mamuon,
            masach: payload.masach,
            madg: payload.madg,
        }        
    }
}
module.exports = borrowService;