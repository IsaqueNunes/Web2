import { Request, Response } from "express";
import { FindTagByNameUseCase } from "./FindTagByNameUseCase";

class FindTagByNameController {
    constructor(private findTagByNameUseCase: FindTagByNameUseCase) { }

    async handle(request: Request, response: Response) {
        const { name } = request.params;

        try {
            const tag = await this.findTagByNameUseCase.execute(name);
            return response.status(201).send(tag);
        }
        catch (err) {
            return response.status(400).send(err.message);
        }
    }
}

export { FindTagByNameController };
