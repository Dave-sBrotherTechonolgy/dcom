// This file contains various memthods that handle fetching data related to user profile

// CUSTOM LIBS
import { client, dbConfig, connectDB } from '../data/connector';

/**
 * @returns The profile data of the developer profile with the given username
 * @param {*} id The id of the developer whose profile data is to fetched
 */
export const getDevProfile  = async (id) => {
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
export const getDevFeatured = async (id) => {
    // Connecting to database
    await connectDB();

    // Fetching data
    const data = await client.db(dbConfig.dbName).collection(dbConfig.collections.Profiles).findOne({ id: id }).then(data => data.portfolio.featured);

    return data;
}

/**
 * @returns The list of education of the developer profile with the given id
 * @param {*} id 
 */
export const getDevEducation = async (id) => {
    // Connecting to database
    await connectDB();

    // Fetching data
    const data = await client.db(dbConfig.dbName).collection(dbConfig.collections.Profiles).findOne({ id: id }).then(data => data.portfolio.education);

    return data;
}

/**
 * @returns The list of certifications of the developer profile with the given id
 * @param {*} id 
 */
export const getDevCertications = async (id) => {
    // Connecting to database
    await connectDB();

    // Fetching data
    const data = await client.db(dbConfig.dbName).collection(dbConfig.collections.Profiles).findOne({ id: id }).then(data => data.portfolio.certifications);

    return data;
}

/**
 * @returns The list of skills of the developer profile with the given id
 * @param {*} id 
 */
export const getDevSkills = async (id) => {
    // Connecting to database
    await connectDB();

    // Fetching data
    const data = await client.db(dbConfig.dbName).collection(dbConfig.collections.Profiles).findOne({ id: id }).then(data => data.portfolio.skills);

    return data;
}

/**
 * @returns The list of projects of the developer profile with the given id
 * @param {*} id 
 */
export const getDevProjects = async (id) => {
    // Connecting to database
    await connectDB();

    // Fetching data
    const data = await client.db(dbConfig.dbName).collection(dbConfig.collections.Profiles).findOne({ id: id }).then(data => data.portfolio.projects);

    return data;
}

/**
 * @returns The list of languages of the developer profile with the given id
 * @param {*} id 
 */
export const getDevLanguages = async (id) => {
    // Connecting to database
    await connectDB();

    // Fetching data
    const data = await client.db(dbConfig.dbName).collection(dbConfig.collections.Profiles).findOne({ id: id }).then(data => data.portfolio.languages);

    return data;
}