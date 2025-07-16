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

server.post('/video', () => {
    return "HEY"
});

server.get('/video/:id', () => {
    return "HEY David"
});

server.put('/video/:id', () => {
    return "HEY Kaique"
});

server.delete('/video/:id', () => {
    return "HEY Kaique"
});

server.listen({
    port: 2525,
});