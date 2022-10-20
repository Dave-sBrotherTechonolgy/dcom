// PACKAGE LIBS
const express = require('express');

// CUSTOM LIBS
const { ProfileRouter } = require('./routers/Profile');

// Creating new express app
const app = express();

// Getting the port to listen on
const port = process.env.APP_PORT;

// Check if server is alive or not
app.get('/', (req, res) => {
    res.send(200);
});

// Adding routers
app.use('/in', ProfileRouter);

// Listening on the given port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});