const { ObjectId } = require('mongodb');

class managerService{
    constructor(client) {
        this.manager =  client.db().collection("quanly");
    }

    extractConactData(payload) {
        const sach = {
            maql: payload.maql,
            matkhauql: payload.matkhauql
        }        
    }
}
module.exports = managerService;