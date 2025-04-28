"use strict";
exports.__esModule = true;
var mongodb_1 = require("mongodb");
var URI = process.env.MONGODB_URI;
var options = {};
if (!URI)
    throw new Error('Please add your Mongo URI to .env.local');
var client;
var clientPromise;
if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        client = new mongodb_1.MongoClient(URI, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
}
else {
    client = new mongodb_1.MongoClient(URI, options);
    clientPromise = client.connect();
}
exports["default"] = clientPromise;
