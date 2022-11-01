// PACKAGE LIBS
import express from 'express';

// CUSTOM LIBS
import ProfileController from './controllers/ProfileController';

// Creating new express app
const app = express();

// Getting the port to listen on
const port = process.env.APP_PORT;

// Check if server is alive or not
app.get('/', (req, res) => {
    res.send(200);
});

// Adding controllers for varoius sub routes
app.use('/dev', ProfileController);

// Listening on the given port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});