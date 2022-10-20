// PACKAGE LIBS
const express = require('express');

// Creating new express app
const app = express();

// Getting the port to listen on
const port = process.env.APP_PORT;

// Dummy endpoint
app.get('/', (req, res) => {
    res.send(200);
});

// Listening on the given port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});