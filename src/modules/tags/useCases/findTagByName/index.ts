import { TagPrismaRepository } from "../../repositories/implementations/TagPrismaRepository";
import { FindTagByNameController } from "./FindTagByNameController";
import { FindTagByNameUseCase } from "./FindTagByNameUseCase";

const tagRepository = TagPrismaRepository.getInstance();
const findTagByNameUseCase = new FindTagByNameUseCase(tagRepository);
const findTagByNameController = new FindTagByNameController(findTagByNameUseCase);

export { findTagByNameController };
