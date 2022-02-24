import { NewsPrismaRepository } from "../../repositories/implementations/NewsPrismaRepository";
import { CreateNewsController } from "./CreateNewsController";
import { CreateNewsUseCase } from "./CreateNewsUseCase";

const newsRepository = NewsPrismaRepository.getInstance();
const createNewsUseCase = new CreateNewsUseCase(newsRepository);
const createNewsController = new CreateNewsController(createNewsUseCase);

export { createNewsController };
