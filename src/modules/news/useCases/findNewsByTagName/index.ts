import { NewsPrismaRepository } from "../../repositories/implementations/NewsPrismaRepository";
import { FindNewsByTagNameController } from "./FindNewsByTagNameController";
import { FindNewsByTagNameUseCase } from "./FindNewsByTagNameUseCase";

const newsRepository = NewsPrismaRepository.getInstance();
const findNewsByTagNameUseCase = new FindNewsByTagNameUseCase(newsRepository);
const findNewsByTagNameController = new FindNewsByTagNameController(findNewsByTagNameUseCase);

export { findNewsByTagNameController };
