import { Request, Response } from "express";
import { DeleteNewsUseCase } from "./DeleteNewsUseCase";

class DeleteNewsController {

    constructor(private deleteNews: DeleteNewsUseCase) { }

    async handle(request: Request, response: Response) {
        const { id } = request.params;
        try {
            await this.deleteNews.execute(id);
            return response.status(200).send();
        }
        catch (err) {
            return response.status(400).send(err.message);
        }
    }
}

export { DeleteNewsController };
