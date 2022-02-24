import { INewsRepository } from "../../repositories/INewsRepository";

class FindNewsByTitleUseCase {
    constructor(private newsRepository: INewsRepository) { }
    execute(title: string) {
        return this.newsRepository.findByTitle(title);
    }
}

export { FindNewsByTitleUseCase };
