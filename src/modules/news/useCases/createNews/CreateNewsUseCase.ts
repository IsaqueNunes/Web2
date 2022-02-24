import { INewsRepository, CreateNewsDTO } from "../../repositories/INewsRepository";
import { News } from "../../models/News";

class CreateNewsUseCase {
    constructor(private newsRepository: INewsRepository) { }

    execute({ title, text, tagName }: CreateNewsDTO): Promise<News> {
        return this.newsRepository.create({ title, text, tagName });
    }
}

export { CreateNewsUseCase };
