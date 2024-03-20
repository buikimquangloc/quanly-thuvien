const { ObjectId } = require('mongodb');

class authorService{
    constructor(client) {
        this.author =  client.db().collection("tacgia");
    }

    extractConactData(payload) {
        const tacgia = {
            matg: payload.matg,
            tentg: payload.tentg
        }        
    }
}
module.exports = authorService;