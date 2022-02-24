import { NewsPrismaRepository } from "../../repositories/implementations/NewsPrismaRepository";
import { DeleteNewsController } from "./DeleteNewsController";
import { DeleteNewsUseCase } from "./DeleteNewsUseCase";

const newsRepository = NewsPrismaRepository.getInstance();
const deleteNewsUseCase = new DeleteNewsUseCase(newsRepository);
const deleteNewsController = new DeleteNewsController(deleteNewsUseCase);

export { deleteNewsController };
