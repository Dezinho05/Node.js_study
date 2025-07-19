import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify();
const database = new DatabaseMemory();

server.post('/videos', (request, reply) => {
    //desestruturação
    const { title, description, duration } = request.body;
    
    database.create({
        title: title,
        //short sintaxe if key.name = value.name
        description,
        duration,
    });
    return reply.status(201).send();
});

server.get('/videos', (request) => {
    const search = request.query.search;
    const videos = database.list(search);
    return videos;
    //return reply.send(videos);
});

server.put('/videos/:id', (request, reply) => {
    const videoId = request.params.id;
    const { title, description, duration } = request.body;

    database.update(videoId, {
        title,
        description,
        duration
    });

    return reply.status(204).send();
});

server.delete('/videos/:id', (request, reply) => {
    const videoID = request.params.id

    database.delete(videoID);

    return reply.status(204).send();
});

server.listen({
    port: 2525,
});