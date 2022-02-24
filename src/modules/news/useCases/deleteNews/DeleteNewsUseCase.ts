import { INewsRepository } from "../../repositories/INewsRepository";

class DeleteNewsUseCase {
    constructor(private newsRepository: INewsRepository) { }
    execute(id: string) {
        return this.newsRepository.delete(id);
    }
}

export { DeleteNewsUseCase };
