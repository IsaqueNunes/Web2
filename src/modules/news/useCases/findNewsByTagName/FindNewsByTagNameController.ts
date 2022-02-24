import { Request, Response } from "express";
import { FindNewsByTagNameUseCase } from "./FindNewsByTagNameUseCase";

class FindNewsByTagNameController {

    constructor(private findNewsByName: FindNewsByTagNameUseCase) { }

    async handle(request: Request, response: Response) {
        const { tagName } = request.params;
        try {
            const news = await this.findNewsByName.execute(tagName);
            return response.status(200).json(news);
        }
        catch (err) {
            return response.status(400).send(err.message);
        }
    }
}

export { FindNewsByTagNameController };
