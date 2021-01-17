const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
    return response.json({ message: 'Bombou!' });
});

app.listen(3333);