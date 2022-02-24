import { INewsRepository } from "../../repositories/INewsRepository";

class FindNewsByIdUseCase {
    constructor(private newsRepository: INewsRepository) { }
    execute(id: string) {
        return this.newsRepository.findById(id);
    }
}

export { FindNewsByIdUseCase };
