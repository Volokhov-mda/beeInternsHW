const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'));
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
