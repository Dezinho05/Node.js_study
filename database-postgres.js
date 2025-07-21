import { randomUUID } from 'node:crypto'
import { sql } from "./db.js"

export class DatabasePostgres {
    #videos = new Map();
    //# visibility: class only

    async list(search){
        let videos;

        if (search){
            videos = await sql`
                SELECT * FROM videos
                WHERE title ILIKE ${'%' + search + '%'};
            `
        }
        else {
            videos = await sql`
                SELECT * FROM videos;
            `
        }

        return videos;
    };

    async create(video){
        const id = randomUUID();
        //const {title, description, duration} = video
        const videos = sql`
            INSERT INTO videos (id, title, description, duration)
            VALUES (${id}, ${video.title}, ${video.description}, ${video.duration});
        `

        return videos
    };

    async update(id, video){
        const videos = sql`
            UPDATE videos
            SET title = ${video.title},
                description = ${video.description},
                duration = ${video.duration}
            WHERE id = ${id};
        `
        return videos;
    };

    async delete(id){
        const videos = sql`
            DELETE FROM videos
            WHERE id = ${id};
        `
        return videos;
    };
}