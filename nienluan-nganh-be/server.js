require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 2002;
const hostname = process.env.HOST_NAME;

const connectToDatabase = require('./config/connectDB');

app.listen(port, hostname, () => {
    console.log(`Listening on port ${port}`)
})

const bookRouter = require('./routes/book.route')
app.use("/books", bookRouter)

