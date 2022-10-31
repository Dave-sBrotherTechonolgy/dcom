// This file contains various methods for connecting to the database

// PACKAGE LIBS
const { MongoClient } = require('mongodb');

// CUSTOM LIBS
const urls = require('../configs/urls');

// Creating a new mongo client
const client = new MongoClient(urls.db.url);

/**
 * @summary Stores the database structure
 */
const dbConfig = {
    "dbName": "profiles",
    "collections": {
        "Profiles": "developers"
    }
};

/**
 * @summary Connects to the mongodb server
 */
const connectDB = async () => {
    try {
        // Connecting to the client
        await client.connect();
    }
    catch(err) {
        console.log("Failed to connect to mongodb server");
    }
};

module.exports.dbConfig = dbConfig;
module.exports.client = client;
module.exports.connectDB = connectDB;