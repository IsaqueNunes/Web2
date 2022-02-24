import { ITagRepository } from "../../repositories/ITagRepository";

class DeleteTagUseCase {
    constructor(private tagRepository: ITagRepository) { }

    execute(id: string) {
        return this.tagRepository.delete(id);
    }
}

export { DeleteTagUseCase };
