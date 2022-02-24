import { NewsPrismaRepository } from "../../repositories/implementations/NewsPrismaRepository";
import { UpdateNewsController } from "./UpdateNewsController";
import { UpdateNewsUseCase } from "./UpdateNewsUseCase";

const newsRepository = NewsPrismaRepository.getInstance();
const updateNewsUseCase = new UpdateNewsUseCase(newsRepository);
const updateNewsController = new UpdateNewsController(updateNewsUseCase);

export { updateNewsController };
