// -------This file will Reset your Database--------- //

const client = require("./client");

// Drop Tables
const dropTables = async () => {};
// Create Tables
const createTables = async () => {};
// Seed Data
const seedData = async () => {};
// Call all of the functions together and 'BUILD' you db
const rebuildDb = async () => {
  try {
    client.connect();
    // call your functions in the correct order!
  } catch (error) {
    console.error(error);
  } finally {
    client.end()
  }
};

// Call the rebuildDb function
rebuildDb();
