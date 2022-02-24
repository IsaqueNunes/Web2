import { TagPrismaRepository } from "../../repositories/implementations/TagPrismaRepository";
import { FindTagByIdController } from "./FindTagByIdController";
import { FindTagByIdUseCase } from "./FindTagByIdUseCase";

const tagRepository = TagPrismaRepository.getInstance();
const findTagByIdUseCase = new FindTagByIdUseCase(tagRepository);
const findTagByIdController = new FindTagByIdController(findTagByIdUseCase);

export { findTagByIdController };
