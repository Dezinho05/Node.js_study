import { sql } from './db.js'

await sql`
    CREATE TABLE (
    title TEXT,
    description TEXT,
    duration INTEGER
    );
`.then(() => {
    console.log('Tabela Criada!');
});
//node create-table.js