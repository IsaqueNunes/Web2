import { NewsPrismaRepository } from "../../repositories/implementations/NewsPrismaRepository";
import { FindNewsByTitleController } from "./FindNewsByTitleController";
import { FindNewsByTitleUseCase } from "./FindNewsByTitleUseCase";

const newsRepository = NewsPrismaRepository.getInstance();
const findNewsByTitleUseCase = new FindNewsByTitleUseCase(newsRepository);
const findNewsByTitleController = new FindNewsByTitleController(findNewsByTitleUseCase);

export { findNewsByTitleController };
