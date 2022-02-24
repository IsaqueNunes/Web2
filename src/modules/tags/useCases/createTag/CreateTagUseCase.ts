import { ITagRepository, CreateTagDTO } from "../../repositories/ITagRepository";

class CreateTagUseCase {
    constructor(private tagRepository: ITagRepository) { }

    execute({ name, description }: CreateTagDTO) {
        return this.tagRepository.create({ name, description });
    }
}

export { CreateTagUseCase };
