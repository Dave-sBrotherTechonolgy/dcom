// This file contains various memthods that handle fetching data related to user profile

// CUSTOM LIBS
const { Users } = require('../data/test/User');

/**
 * @returns The profile data of the user with the given username
 * @param {*} userName The username of the user whose profile data is to fetched
 */
const getUserProfile  = (userName) => {
    return Users[0];
};

module.exports.getUserProfile = getUserProfile;