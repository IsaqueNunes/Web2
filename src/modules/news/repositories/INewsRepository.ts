import { Tag } from "../../tags/models/Tag";
import { News } from "../models/News";

interface CreateNewsDTO {
    title: string;
    text: string;
    tagName: string;
}

interface UpdateNewsDTO {
    id: string;
    title?: string;
    text?: string;
    tagName?: string;
}

interface INewsRepository {
    create({ title, text, tagName }: CreateNewsDTO): Promise<News>;
    findAll(): Promise<News[]>;
    findById(id: string): Promise<News>;
    findByTitle(title: string): Promise<News>;
    findByTagName(tagName: string): Promise<News[]>;
    findByTagId(tagId: string): Promise<News[]>;
    update({ id, title, text, tagName }: UpdateNewsDTO): Promise<News>;
    delete(id: string): Promise<void>;
}


export { CreateNewsDTO, UpdateNewsDTO, INewsRepository };
