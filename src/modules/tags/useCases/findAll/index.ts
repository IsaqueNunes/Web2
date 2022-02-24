import { TagPrismaRepository } from "../../repositories/implementations/TagPrismaRepository";
import { FindAllTagsController } from "./FindAllTagsController";
import { FindAllTagsUseCase } from "./FindAllTagsUseCase";

const tagRepository = TagPrismaRepository.getInstance();
const findAllTagsUseCase = new FindAllTagsUseCase(tagRepository);
const findAllTagsController = new FindAllTagsController(findAllTagsUseCase);

export { findAllTagsController };
