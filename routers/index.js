// linking express and postNotes file;
const express = require('express');

const notes = require('./postNote');
// express is initialized;
const app = express();

// notes path is connected through the postNote.js;
app.use('/notes', notes);

module.exports = app;
