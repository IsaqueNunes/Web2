import { NewsPrismaRepository } from "../../repositories/implementations/NewsPrismaRepository";
import { ListAllNewsController } from "./ListAllNewsController";
import { ListAllNewsUseCase } from "./ListAllNewsUseCase";

const newsRepository = NewsPrismaRepository.getInstance();
const listAllNewsUseCase = new ListAllNewsUseCase(newsRepository);
const listAllNewsController = new ListAllNewsController(listAllNewsUseCase);

export { listAllNewsController };
