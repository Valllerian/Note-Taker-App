const express = require('express');
const path = require('path'); 

const app = express();

app.get('/notes', (_, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

app.get('*', (_, res) => 
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = app;
