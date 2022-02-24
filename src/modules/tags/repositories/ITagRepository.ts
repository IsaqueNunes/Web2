import { Tag } from "../models/Tag";

interface CreateTagDTO {
    name: string;
    description: string;
}

interface UpdateTagDTO {
    id: string;
    name?: string;
    description?: string;
}

interface ITagRepository {
    create({ name, description }: CreateTagDTO): Promise<Tag>;
    findAll(): Promise<Tag[]>;
    findById(id: string): Promise<Tag>;
    findByName(name: string): Promise<Tag>;
    update({ id, name, description }: UpdateTagDTO): Promise<Tag>;
    delete(id: string): Promise<void>;
}

export { CreateTagDTO, UpdateTagDTO, ITagRepository };
