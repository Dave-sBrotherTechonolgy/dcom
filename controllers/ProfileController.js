// This file contains various routes related to user profile

// PACKAGE LIBS
import express from 'express';

// CUSTOM LIBS
import * as profileHandlers from '../services/ProfileService';

// Creating a new Controller
const ProfileController = express.Router();

// Adding controller endpoints

// Endpoint to fetch all developer profile data
ProfileController.get('/:id', async (req, res) => {
    res.send(await profileHandlers.getDevProfile(req.params.id));
});

// Endpoint to fetch the list of featured of the given developer profile
ProfileController.get('/:id/featured', async (req, res) => {
    res.send(await profileHandlers.getDevFeatured(req.params.id));
});

// Endpoint to fetch the list of education of the given developer profile
ProfileController.get('/:id/education', async (req, res) => {
    res.send(await profileHandlers.getDevEducation(req.params.id));
});

// Endpoint to fetch the list of certifications of the given developer profile
ProfileController.get('/:id/certifications', async (req, res) => {
    res.send(await profileHandlers.getDevCertications(req.params.id));
});

// Endpoint to fetch the list of skills of the given developer profile
ProfileController.get('/:id/skills', async (req, res) => {
    res.send(await profileHandlers.getDevSkills(req.params.id));
});

// Endpoint to fetch the list of projects of the given developer profile
ProfileController.get('/:id/projects', async (req, res) => {
    res.send(await profileHandlers.getDevProjects(req.params.id));
});

// Endpoint to fetch the list of languages of the given developer profile
ProfileController.get('/:id/languages', async (req, res) => {
    res.send(await profileHandlers.getDevLanguages(req.params.id));
});

export default ProfileController;