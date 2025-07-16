//  NODE
// import {createServer} from 'node:http'

// const server = createServer((req, res ) => {
//     res.write('oi');
//     return res.end();
// });

// server.listen(2525);

// Fastify
import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify();
const database = new DatabaseMemory();

server.post('/videos', (response, reply) => {
    database.create({
        title: 'Video 01',
        description: 'Este é o primeiro video',
        duration: 100,
    });
    return reply.status(201).send();
});

server.get('/videos/:id', () => {
    return "HEY David"
});

server.put('/videos/:id', () => {
    return "HEY Kaique"
});

server.delete('/videos/:id', () => {
    return "HEY Kaique"
});

server.listen({
    port: 2525,
});