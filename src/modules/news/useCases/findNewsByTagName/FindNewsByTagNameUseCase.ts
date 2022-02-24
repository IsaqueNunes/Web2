import { INewsRepository } from "../../repositories/INewsRepository";

class FindNewsByTagNameUseCase {
    constructor(private newsRepository: INewsRepository) { }
    execute(tagName: string) {
        return this.newsRepository.findByTagName(tagName);
    }
}

export { FindNewsByTagNameUseCase };
