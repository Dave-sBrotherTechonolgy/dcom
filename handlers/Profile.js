// This file contains various memthods that handle fetching data related to user profile

// CUSTOM LIBS
const { Users } = require('../data/test/User');
const { client, dbConfig, connectDB } = require('../data/connector');

/**
 * @returns The profile data of the user with the given username
 * @param {*} userName The username of the user whose profile data is to fetched
 */
const getUserProfile  = async (userName) => {
    // Connecting to database
    await connectDB();

    // Fetching data
    const data = await client.db(dbConfig.dbName).collection(dbConfig.collections.Profiles).findOne({ name: userName });

    return data;
};

module.exports.getUserProfile = getUserProfile;