import { INewsRepository, UpdateNewsDTO } from "../../repositories/INewsRepository";
import { News } from "../../models/News";

class UpdateNewsUseCase {
    constructor(private newsRepository: INewsRepository) { }

    execute({ id, title, text, tagName }: UpdateNewsDTO): Promise<News> {
        return this.newsRepository.update({ id, title, text, tagName });
    }
}

export { UpdateNewsUseCase };
