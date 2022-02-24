import { Tag } from "../../tags/models/Tag";
import { v4 as uuidV4 } from "uuid";
import { CreateNewsDTO } from "../repositories/INewsRepository";

class News {
    id: string;
    title: string;
    text: string;
    tagId: string;
    createdAt: Date;
    updatedAt: Date;

    constructor() {
        this.id = uuidV4();
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}

export { News };
