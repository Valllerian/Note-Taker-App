// importing helper functions and creating a router;
const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsFunctions');

// importing the database
const database = require("../db/db.json");

// using uniqId npm to assign a unique id to each note;
const uniqId = require('uniqid');

// getting info from the database to later display on the page;
notes.get('/', (_, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
    // added a catch for an error case;
    .catch((err) => console.log(err))
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

// bonus task - write a delete method to get rid of a specific note;
notes.delete('/:id', (req, res) => {
    // passing id as a req. parameter;
    const id = req.params.id;
    readFromFile('./db/db.json').then((data) => {
        // parsing the data read from the database;
        note = JSON.parse(data);
        // looking for the unique index match and filtering it out;
        const newNotes = note.filter((note) => note.id != id);
        // writing to the db;
        writeToFile('./db/db.json', newNotes); });
        res.json(note);
    });

module.exports = notes;