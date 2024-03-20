const { ObjectId } = require('mongodb');

class categoryService{
    constructor(client) {
        this.category =  client.db().collection("theloai");
    }

    extractConactData(payload) {
        const theloai = {
            matl: payload.matl,
            tentl: payload.tentl
        }        
    }
}
module.exports = categoryService;