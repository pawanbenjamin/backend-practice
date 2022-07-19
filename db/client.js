const { Client } = require("pg");

const dbName = "enter your db name here";

const client = new Client(`postgres://localhost:5432/${dbName}`);

module.exports = client;
