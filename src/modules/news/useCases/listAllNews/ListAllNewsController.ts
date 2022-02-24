import { Request, Response } from "express";
import { ListAllNewsUseCase } from "./ListAllNewsUseCase";

class ListAllNewsController {

    constructor(private listAllNewsUseCase: ListAllNewsUseCase) { }

    async handle(request: Request, response: Response) {
        try {
            const news = await this.listAllNewsUseCase.execute();
            return response.status(200).json(news);
        }
        catch (err) {
            return response.status(400).send(err.message);
        }
    }
}

export { ListAllNewsController };
