import { INewsRepository } from "../../repositories/INewsRepository";

class ListAllNewsUseCase {
    constructor(private newsRepository: INewsRepository) { }
    execute() {
        return this.newsRepository.findAll();
    }
}

export { ListAllNewsUseCase };
