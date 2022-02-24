import { Request, Response } from "express";
import { UpdateTagUseCase } from "./UpdateTagUseCase";

class UpdateTagController {
    constructor(private updateTagUseCase: UpdateTagUseCase) { }

    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, description } = request.body;

        try {
            const tag = await this.updateTagUseCase.execute({ id, name, description });
            return response.status(201).send(tag);
        }
        catch (err) {
            return response.status(400).send(err.message);
        }
    }
}

export { UpdateTagController };
