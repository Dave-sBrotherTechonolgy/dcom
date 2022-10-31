// This file contains various routes related to user profile

// PACKAGE LIBS
import express from 'express';

// CUSTOM LIBS
import * as profileHandlers from '../handlers/Profile';

// Creating a new Router
const ProfileRouter = express.Router();

// Adding router endpoints

// Endpoint to fetch all developer profile data
ProfileRouter.get('/:id', async (req, res) => {
    res.send(await profileHandlers.getDevProfile(req.params.id));
});

// Endpoint to fetch the list of featured of the given developer profile
ProfileRouter.get('/:id/featured', async (req, res) => {
    res.send(await profileHandlers.getDevFeatured(req.params.id));
});

// Endpoint to fetch the list of education of the given developer profile
ProfileRouter.get('/:id/education', async (req, res) => {
    res.send(await profileHandlers.getDevEducation(req.params.id));
});

// Endpoint to fetch the list of certifications of the given developer profile
ProfileRouter.get('/:id/certifications', async (req, res) => {
    res.send(await profileHandlers.getDevCertications(req.params.id));
});

// Endpoint to fetch the list of skills of the given developer profile
ProfileRouter.get('/:id/skills', async (req, res) => {
    res.send(await profileHandlers.getDevSkills(req.params.id));
});

// Endpoint to fetch the list of projects of the given developer profile
ProfileRouter.get('/:id/projects', async (req, res) => {
    res.send(await profileHandlers.getDevProjects(req.params.id));
});

// Endpoint to fetch the list of languages of the given developer profile
ProfileRouter.get('/:id/languages', async (req, res) => {
    res.send(await profileHandlers.getDevLanguages(req.params.id));
});

export default ProfileRouter;