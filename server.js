const express = require('express');

const path = require('path');
const api = require('./routers/index')

const notes = require('./routers/postNote')

const PORT = process.envPORT || 3001;

const app = express();

app.use(express.json());

app.use('/api', api);



// setting up a middleware to show the static page
app.use(express.static('public'));

// setting up a get method fot the root path
app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// setting up a get method fot the /notes path
app.get('/notes', (_, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

// successful port connection log
app.listen(PORT, () => {
    console.log(`Server is successfully running on port ${PORT}! Link:http://localhost:${PORT}/api`);
});
