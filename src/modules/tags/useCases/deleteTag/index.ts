import { TagPrismaRepository } from "../../repositories/implementations/TagPrismaRepository";
import { DeleteTagController } from "./DeleteTagController";
import { DeleteTagUseCase } from "./DeleteTagUseCase";

const tagRepository = TagPrismaRepository.getInstance();
const deleteTagUseCase = new DeleteTagUseCase(tagRepository);
const deleteTagController = new DeleteTagController(deleteTagUseCase);

export { deleteTagController };
