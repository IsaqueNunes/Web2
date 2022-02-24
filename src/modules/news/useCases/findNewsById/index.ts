import { NewsPrismaRepository } from "../../repositories/implementations/NewsPrismaRepository";
import { FindNewsByIdController } from "./FindNewsByIdController";
import { FindNewsByIdUseCase } from "./FindNewsByIdUseCase";

const newsRepository = NewsPrismaRepository.getInstance();
const findNewsByIdUseCase = new FindNewsByIdUseCase(newsRepository);
const findNewsByIdController = new FindNewsByIdController(findNewsByIdUseCase);

export { findNewsByIdController };
