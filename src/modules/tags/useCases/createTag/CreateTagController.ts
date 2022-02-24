import { Request, Response } from "express";
import { CreateTagUseCase } from "./CreateTagUseCase";

class CreateTagController {
    constructor(private createTagUseCase: CreateTagUseCase) { }

    async handle(request: Request, response: Response) {
        const { name, description } = request.body;

        try {
            const tag = await this.createTagUseCase.execute({ name, description });
            return response.status(201).send(tag);
        }
        catch (err) {
            return response.status(400).send(err.message);
        }
    }
}

export { CreateTagController };
