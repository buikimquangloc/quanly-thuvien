const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/Library'; 

const dbName = 'Library';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to the database");

        const db = client.db(dbName);


    } catch (error) {
        console.error("Error connecting to the database: ", error);
    }
}

connectToDatabase();