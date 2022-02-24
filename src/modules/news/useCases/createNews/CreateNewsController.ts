import { Request, Response } from "express";
import { CreateNewsUseCase } from "./CreateNewsUseCase";

class CreateNewsController {
    constructor(private createNewsUseCase: CreateNewsUseCase) { }

    async handle(request: Request, response: Response) {
        const { title, text, tagName } = request.body;

        try {
            const news = await this.createNewsUseCase.execute({ title, text, tagName });
            return response.status(201).send(news);
        }
        catch (err) {
            return response.status(400).send(err.message);
        }
    }
}

export { CreateNewsController };
