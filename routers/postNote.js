// importing helper functions and creating a router;
const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsFunctions');

// using uniqId npm to assign a unique id to each note;
const uniqId = require('uniqid');

// getting info from the database to later display on the page;
notes.get('/', (_, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    // passing our request in the const;
    const { title, text } = req.body;
    // if our request has title and text in it, unique id will be assigned;
    if (req.body) {
        const newNote = {
            title,
            text,
            id: uniqId(),
        };
        // appending newNote to the database;
        readAndAppend(newNote, './db/db.json');
        console.log(`Note is added to the database.`);
        res.json(`Note is added to the database.`);
    }
    else {
        // if error occurs:
        res.error('Error in adding note');
    }
});

module.exports = notes;