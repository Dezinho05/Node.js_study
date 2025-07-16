import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
    #videos = new Map();
    //# visivel somente dentro da classe

    list(){
        return this.#videos.values();
    };

    create(video){
        const videoId = randomUUID();

        this.#videos.set(videoId, video);
    };

    update(id, video){
        this.#videos.set(id, video);
    };

    delete(id){
        this.#videos.delete(id)
    };
}