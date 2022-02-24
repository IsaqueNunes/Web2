import { ITagRepository } from "../../repositories/ITagRepository";

class FindTagByIdUseCase {
    constructor(private tagRepository: ITagRepository) { }

    execute(id: string) {
        return this.tagRepository.findById(id);
    }
}

export { FindTagByIdUseCase };
