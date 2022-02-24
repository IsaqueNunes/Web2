import { ITagRepository, UpdateTagDTO } from "../../repositories/ITagRepository";

class UpdateTagUseCase {
    constructor(private tagRepository: ITagRepository) { }

    execute({ id, name, description }: UpdateTagDTO) {
        return this.tagRepository.update({ id, name, description });
    }
}

export { UpdateTagUseCase };
