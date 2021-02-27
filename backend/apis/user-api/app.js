const express = require('express');
const app = express();

const { Client } = require('pg')
const { dbUser, dbHost, dbName, dbPassword, dbPort } = require('./keys');
const client = new Client({
    user: dbUser,
    host: dbHost,
    database: dbName,
    password: dbPassword,
    port: dbPort,
})

// Connect to DB
client.connect((err) => {
    console.error("Error connecting to Database!");
    console.log(err);
    process.exit(1);
})

app.locals.dbClient = client;

router.get('/', (req, res) => res.send("Healthy!"));

module.exports = app;