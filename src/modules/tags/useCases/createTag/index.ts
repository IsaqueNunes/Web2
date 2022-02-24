import { TagPrismaRepository } from "../../repositories/implementations/TagPrismaRepository";
import { CreateTagController } from "./CreateTagController";
import { CreateTagUseCase } from "./CreateTagUseCase";

const tagRepository = TagPrismaRepository.getInstance();
const createTagUseCase = new CreateTagUseCase(tagRepository);
const createTagController = new CreateTagController(createTagUseCase);

export { createTagController };
