// This file contains various routes related to user profile

// PACKAGE LIBS
const express = require('express');

// CUSTOM LIBS
const profileHandlers = require('../handlers/Profile');

// Creating a new Router
const ProfileRouter = express.Router();

// Adding router endpoints

ProfileRouter.get('/:id', async (req, res) => {
    res.send(await profileHandlers.getUserProfile(req.params.id));
});

module.exports.ProfileRouter = ProfileRouter;