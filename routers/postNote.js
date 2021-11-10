// importing helper functions and creating a router;
const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsFunctions');

// using uniqId npm to assign a unique id to each note;
const uniqId = require('uniqid');

// getting info from the database to later display on the page;
notes.get('/', (_, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

module.exports = notes;