// PACKAGE LIBS
import express from 'express';

// CUSTOM LIBS
import ProfileRouter from './routers/Profile';

// Creating new express app
const app = express();

// Getting the port to listen on
const port = process.env.APP_PORT;

// Check if server is alive or not
app.get('/', (req, res) => {
    res.send(200);
});

// Adding routers
app.use('/dev', ProfileRouter);

// Listening on the given port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});