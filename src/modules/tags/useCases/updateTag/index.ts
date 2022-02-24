import { TagPrismaRepository } from "../../repositories/implementations/TagPrismaRepository";
import { UpdateTagController } from "./UpdateTagController";
import { UpdateTagUseCase } from "./UpdateTagUseCase";

const tagRepository = TagPrismaRepository.getInstance();
const updateTagUseCase = new UpdateTagUseCase(tagRepository);
const updateTagController = new UpdateTagController(updateTagUseCase);

export { updateTagController };
