import { Request, Response } from "express";
import { FindNewsByIdUseCase } from "./FindNewsByIdUseCase";

class FindNewsByIdController {

    constructor(private findNewsByName: FindNewsByIdUseCase) { }

    async handle(request: Request, response: Response) {
        const { id } = request.params;
        try {
            const news = await this.findNewsByName.execute(id);
            return response.status(200).json(news);
        }
        catch (err) {
            return response.status(400).send(err.message);
        }
    }
}

export { FindNewsByIdController };
