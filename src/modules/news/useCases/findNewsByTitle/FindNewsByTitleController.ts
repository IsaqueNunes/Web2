import { Request, Response } from "express";
import { FindNewsByTitleUseCase } from "./FindNewsByTitleUseCase";

class FindNewsByTitleController {

    constructor(private findNewsByTitle: FindNewsByTitleUseCase) { }

    async handle(request: Request, response: Response) {
        const { title } = request.params;
        try {
            const news = await this.findNewsByTitle.execute(title);
            return response.status(200).json(news);
        }
        catch (err) {
            return response.status(400).send(err.message);
        }
    }
}

export { FindNewsByTitleController };
