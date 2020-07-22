const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.get('/styles/styles.css', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../styles/styles.css'));
});

app.get('/scripts/listeners.js/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'listeners.js'))
});

app.get('/scripts/server.js/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'server.js'))
});

app.get('/scripts/variables.js/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'variables.js'))
});

app.get('/serviceavailable/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../serviceavailable.json'));
});

app.get('/getinfo/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../getinfo.json'))
});

app.get('/getdescription/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../getdescription.json'))
});

app.listen(4040, () => console.log('App listening on port 4040'));
