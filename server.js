// PACKAGE LIBS
const express = require('express');

// CUSTOM LIBS
const profileHandlers = require('./handlers/Profile');

// Creating new express app
const app = express();

// Getting the port to listen on
const port = process.env.APP_PORT;

// Check if server is alive or not
app.get('/', (req, res) => {
    res.send(200);
});

// Endpoint ot fetch user profile data
app.get('/in/:username', (req, res) => {
    res.send(profileHandlers.getUserProfile(req.params.username));
});

// Listening on the given port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});