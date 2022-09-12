import express from 'express';

const app = express();

//localhost:3333/ads

app.get('/ads', (request, response) => {
    return response.json([
        {id: 1, name: 'anuncio 1'},
        {id: 1, name: 'anuncio 1'},
    ])
});

app.listen(3333);