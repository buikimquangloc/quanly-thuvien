const { ObjectId } = require('mongodb');

class publisherService{
    constructor(client) {
        this.publisher =  client.db().collection("nhaxuatban");
    }

    extractConactData(payload) {
        const publisher = {
            manxb: payload.manxb,
            tennxb: payload.tennxb
        }        
    }
}
module.exports = publisherService;