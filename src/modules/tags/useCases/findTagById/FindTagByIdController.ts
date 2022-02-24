import { Request, Response } from "express";
import { FindTagByIdUseCase } from "./FindTagByIdUseCase";

class FindTagByIdController {
    constructor(private findTagByIdUseCase: FindTagByIdUseCase) { }

    async handle(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const tag = await this.findTagByIdUseCase.execute(id);
            return response.status(201).send(tag);
        }
        catch (err) {
            return response.status(400).send(err.message);
        }
    }
}

export { FindTagByIdController };
