import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
    #videos = new Map();
    //# visivel somente dentro da classe

    list(search){
        return Array.from(this.#videos.entries())
        .map((videoArray)=>{
            const id = videoArray[0];
            const data = videoArray[1];

            return {
                id,
                ...data,
            };
        })
        //query params
        .filter(video => {
            if (search){
                return video.title.includes(search)
            }
            return true;
        });
    };

    create(video){
        const videoId = randomUUID();

        this.#videos.set(videoId, video);
    };

    update(id, video){
        const searchId = this.#videos.get(id);
        if (searchId === undefined) {
            this.#videos.set(id, video);
        }
    };

    delete(id){
        this.#videos.delete(id)
    };
}