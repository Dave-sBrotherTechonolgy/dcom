// This file contains various methods for connecting to the database

// PACKAGE LIBS
import  { MongoClient } from 'mongodb';

// CUSTOM LIBS
import config from '../configs/config';

// Creating a new mongo client
export const client = new MongoClient(config.db_url);

/**
 * @summary Stores the database structure
 */
export const dbConfig = {
    "dbName": "profiles",
    "collections": {
        "Profiles": "developers"
    }
};

/**
 * @summary Connects to the mongodb server
 */
export const connectDB = async () => {
    try {
        // Connecting to the client
        await client.connect();
    }
    catch(err) {
        console.log("Failed to connect to mongodb server");
    }
};