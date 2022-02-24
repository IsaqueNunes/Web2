import { ITagRepository } from "../../repositories/ITagRepository";

class FindTagByNameUseCase {
    constructor(private tagRepository: ITagRepository) { }

    execute(name: string) {
        return this.tagRepository.findByName(name);
    }
}

export { FindTagByNameUseCase };
