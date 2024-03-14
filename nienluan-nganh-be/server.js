require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 2002;
const hostname = process.env.HOST_NAME;

const router = require('./routes/route');
app.use(router);

app.listen(port, hostname, () => {
    console.log(`Listening on port ${port}`)
})


