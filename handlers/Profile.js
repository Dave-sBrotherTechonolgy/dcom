// This file contains various memthods that handle fetching data related to user profile

// CUSTOM LIBS
const { client, dbConfig, connectDB } = require('../data/connector');

/**
 * @returns The profile data of the developer profile with the given username
 * @param {*} id The id of the developer whose profile data is to fetched
 */
const getDevProfile  = async (id) => {
    // Connecting to database
    await connectDB();

    // Fetching data
    const data = await client.db(dbConfig.dbName).collection(dbConfig.collections.Profiles).findOne({ id: id }).then(data => data.summary);

    return data;
};

/**
 * @returns The list of featured of the developer profile with the given id
 * @param {*} id 
 */
const getDevFeatured = async (id) => {
    // Connecting to database
    await connectDB();

    // Fetching data
    const data = await client.db(dbConfig.dbName).collection(dbConfig.collections.Profiles).findOne({ id: id }).then(data => data.featured);

    return data;
}

/**
 * @returns The list of education of the developer profile with the given id
 * @param {*} id 
 */
const getDevEducation = async (id) => {
    // Connecting to database
    await connectDB();

    // Fetching data
    const data = await client.db(dbConfig.dbName).collection(dbConfig.collections.Profiles).findOne({ id: id }).then(data => data.education);

    return data;
}

/**
 * @returns The list of certifications of the developer profile with the given id
 * @param {*} id 
 */
const getDevCertications = async (id) => {
    // Connecting to database
    await connectDB();

    // Fetching data
    const data = await client.db(dbConfig.dbName).collection(dbConfig.collections.Profiles).findOne({ id: id }).then(data => data.certifications);

    return data;
}

/**
 * @returns The list of skills of the developer profile with the given id
 * @param {*} id 
 */
const getDevSkills = async (id) => {
    // Connecting to database
    await connectDB();

    // Fetching data
    const data = await client.db(dbConfig.dbName).collection(dbConfig.collections.Profiles).findOne({ id: id }).then(data => data.skills);

    return data;
}

/**
 * @returns The list of projects of the developer profile with the given id
 * @param {*} id 
 */
const getDevProjects = async (id) => {
    // Connecting to database
    await connectDB();

    // Fetching data
    const data = await client.db(dbConfig.dbName).collection(dbConfig.collections.Profiles).findOne({ id: id }).then(data => data.projects);

    return data;
}

/**
 * @returns The list of languages of the developer profile with the given id
 * @param {*} id 
 */
const getDevLanguages = async (id) => {
    // Connecting to database
    await connectDB();

    // Fetching data
    const data = await client.db(dbConfig.dbName).collection(dbConfig.collections.Profiles).findOne({ id: id }).then(data => data.languages);

    return data;
}

module.exports.getDevProfile = getDevProfile;
module.exports.getDevFeatured = getDevFeatured;
module.exports.getDevEducation = getDevEducation;
module.exports.getDevCertications = getDevCertications;
module.exports.getDevSkills = getDevSkills;
module.exports.getDevProjects = getDevProjects;
module.exports.getDevLanguages = getDevLanguages;