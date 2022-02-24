import { Request, Response } from "express";
import { FindAllTagsUseCase } from "./FindAllTagsUseCase";
import { ITagRepository } from "../../repositories/ITagRepository";


class FindAllTagsController {
    constructor(private findAllTagsUseCase: FindAllTagsUseCase) { }

    async handle(request: Request, response: Response) {
        try {
            const tags = await this.findAllTagsUseCase.execute();
            return response.status(200).send(tags);
        }
        catch (err) {
            return response.status(400).send(err.message);
        }
    }
}

export { FindAllTagsController };
