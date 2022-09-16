import express from 'express';

const app = express();

//localhost:3333/ads

app.get('/games', (resquest, response) => {
    return response.json([]);
});

app.post('/ads', (request, response) => {
    return response.status(201).json([]);
});

app.get('/games/:id/ads', (request, response) => {
    //const gameId = request.params.id;


    return response.json([
        {id: 1, name: 'anuncio 1'},
        {id: 1, name: 'anuncio 1'},
    ])
});

app.get('/ads/:id/discord', (request, response) => {
    return response.json([]);
});



app.listen(3333);