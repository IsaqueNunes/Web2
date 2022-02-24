import { Request, Response } from "express";
import { DeleteTagUseCase } from "./DeleteTagUseCase";

class DeleteTagController {
    constructor(private deleteTagUseCase: DeleteTagUseCase) { }

    async handle(request: Request, response: Response) {
        const { id } = request.params;

        try {
            const tag = await this.deleteTagUseCase.execute(id);
            return response.status(201).send(tag);
        }
        catch (err) {
            return response.status(400).send(err.message);
        }
    }
}

export { DeleteTagController };
