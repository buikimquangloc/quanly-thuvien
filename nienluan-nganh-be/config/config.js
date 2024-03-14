const express = require('express');
const path = require('path');

const config = (app) => {
    app.listen(port, hostname, () => {
        console.log(`Listening on port ${port}`)
    })
}

module.exports = config;