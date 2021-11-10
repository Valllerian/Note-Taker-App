// linking express library;
const express = require('express');

// linking path library to be able to use __dirname;
const path = require('path');

// importing our routes;
const api = require('./routers/index')

// assigning the port number;
const PORT = process.env.PORT || 3001;

// initializing express;
const app = express();

// setting up a middleware to show the static page
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use('/api', api);


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
