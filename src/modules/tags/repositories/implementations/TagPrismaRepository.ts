import { Tag } from "../../models/Tag";
import { prisma } from "../../../../database/prisma";
import { CreateTagDTO, ITagRepository, UpdateTagDTO } from "../ITagRepository";

class TagPrismaRepository implements ITagRepository {
    private static INSTANCE = new TagPrismaRepository();

    private constructor() { }

    static getInstance() {
        if (!this.INSTANCE) this.INSTANCE = new TagPrismaRepository();
        return this.INSTANCE;
    }

    async create({ name, description }: CreateTagDTO): Promise<Tag> {
        const tag = new Tag();

        if (!name) throw new Error("Name is required");
        if (!description) throw new Error("Description is required");

        Object.assign(tag, { name, description });

        return await prisma.tag.create({ data: { ...tag } });
    }

    async findAll(): Promise<Tag[]> {
        return await prisma.tag.findMany();
    }

    async findById(id: string): Promise<Tag> {
        if (!id) throw new Error("Id is required");

        return await prisma.tag.findUnique({ where: { id } });
    }

    async findByName(name: string): Promise<Tag> {
        if (!name) throw new Error("Name is required");
        return await prisma.tag.findUnique({ where: { name } });
    }

    async update({ id, name, description }: UpdateTagDTO): Promise<Tag> {
        if (!id) throw new Error("Id is required");

        const tag = await prisma.tag.findUnique({ where: { id } });

        if (!tag) throw new Error("Tag not found");

        if (name) tag.name = name;
        if (description) tag.description = description;

        return await prisma.tag.update({ where: { id }, data: { ...tag } });
    }

    async delete(id: string): Promise<void> {
        if (!id) throw new Error("Id is required");
        prisma.tag.delete({ where: { id } });
    }

}

export { TagPrismaRepository };
