const express = require('express');

const app = express();

app.use(express.json());

/**
 * Métodos HTTP:
 * 
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Filtros e paginação
 * Route Params: Identificar recursos (Atualizar/Deletar)
 * Request Body: Conteudo na hora de criar ou editar um recurso (JSON)
 */

app.get('/projects', (request, response) => {
    const { back, name } = request.query;

    console.log(back);
    console.log(name);

    return response.json([
        'Projeto 1',
        'Projeto 2'
    ]);
});

app.post('/projects', (request, response) => {
    const { title } = request.body;

    console.log(title);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
});

// http://localhost:3333/projects/2

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;

    console.log(id);

    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.listen(3333, () => {
    console.log('😀 Back-end started!')
});