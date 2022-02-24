import { News } from "../../news/models/News";
import { v4 as uuidV4 } from "uuid";

class Tag {
    id: string;
    name: string;
    description: string;
    // news: News[];

    constructor() {
        this.id = uuidV4();
        // this.news = [];
    }
}

export { Tag };
