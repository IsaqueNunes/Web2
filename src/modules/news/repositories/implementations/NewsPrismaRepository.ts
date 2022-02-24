import { Tag } from "modules/tags/models/Tag";
import { prisma } from "../../../../database/prisma";
import { News } from "../../models/News";
import { CreateNewsDTO, INewsRepository, UpdateNewsDTO } from "../INewsRepository";

class NewsPrismaRepository implements INewsRepository {

    private static INSTANCE = new NewsPrismaRepository();

    private constructor() { }

    static getInstance() {
        if (!this.INSTANCE) this.INSTANCE = new NewsPrismaRepository();
        return this.INSTANCE;
    }

    async create({ title, text, tagName }: CreateNewsDTO): Promise<News> {
        if (!title) throw new Error("Title is required");
        if (!text) throw new Error("Text is required");
        if (!tagName) throw new Error("Tag Name is required");

        const news = new News();

        news.tagId = (await prisma.tag.findUnique({ where: { name: tagName } })).id;

        if (!news.tagId) throw new Error("Tag not found");

        Object.assign(news, { title, text });

        return await prisma.news.create({
            data: { ...news }
        });
    }

    async findAll(): Promise<News[]> {
        return prisma.news.findMany({ include: { Tag: true } });
    }

    async findById(id: string): Promise<News> {
        if (!id) throw new Error("Id is required");
        return await prisma.news.findUnique({ where: { id } });
    }

    async findByTitle(title: string): Promise<News> {
        if (!title) throw new Error("Title is required");
        return await prisma.news.findFirst({ where: { title: title } });
    }

    async findByTagName(tagName: string): Promise<News[]> {
        if (!tagName) throw new Error("Tag name is required");
        return await prisma.news.findMany({ where: { tagId: tagName } });
    }

    async findByTagId(tagId: string): Promise<News[]> {
        if (!tagId) throw new Error("Tag id is required");
        return await prisma.news.findMany({ where: { tagId } });
    }

    async update({ id, title, text, tagName }: UpdateNewsDTO): Promise<News> {
        if (!id) throw new Error("Id is required");
        const news = await prisma.news.findUnique({ where: { id } });

        if (!news) throw new Error("News not found");

        if (title) news.title = title;
        if (text) news.text = text;
        if (tagName) {
            const tag = await prisma.tag.findUnique({ where: { name: tagName } });

            if (!tag) throw new Error("Tag not found");

            news.tagId = tag.id;
        }


        return await prisma.news.update({
            where: { id },
            data: { ...news, updatedAt: new Date() }
        });
    }

    async delete(id: string): Promise<void> {
        if (!id) throw new Error("Id is required");
        await prisma.news.delete({ where: { id } });
    }
}

export { NewsPrismaRepository };
