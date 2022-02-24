import { ITagRepository } from "../../repositories/ITagRepository";
import { Tag } from "../../models/Tag";

class FindAllTagsUseCase {
    constructor(private tagsRepository: ITagRepository) { }

    execute() {
        return this.tagsRepository.findAll();
    }
}

export { FindAllTagsUseCase };
