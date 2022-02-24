import { Request, Response } from "express";
import { UpdateNewsUseCase } from "./UpdateNewsUseCase";

class UpdateNewsController {
    constructor(private updateNewsUseCase: UpdateNewsUseCase) { }

    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { title, text, tagName } = request.body;

        try {
            const news = await this.updateNewsUseCase.execute({ id, title, text, tagName });
            return response.status(201).send(news);
        }
        catch (err) {
            return response.status(400).send(err.message);
        }
    }
}

export { UpdateNewsController };
