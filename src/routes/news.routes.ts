import { Router } from 'express';
import { createNewsController } from '../modules/news/useCases/createNews';
import { listAllNewsController } from '../modules/news/useCases/listAllNews';
import { findNewsByIdController } from '../modules/news/useCases/findNewsById';
import { findNewsByTagNameController } from '../modules/news/useCases/findNewsByTagName';
import { findNewsByTitleController } from '../modules/news/useCases/findNewsByTitle';
import { deleteNewsController } from '../modules/news/useCases/deleteNews';
import { updateNewsController } from '../modules/news/useCases/updateNews';

const newsRouter = Router();

// newsRouter.route('/news');

newsRouter.post('/create', (request, response) => {
    createNewsController.handle(request, response);
});

newsRouter.get('/get/:id', (request, response) => {
    findNewsByIdController.handle(request, response);
});

newsRouter.get('/get-by-title/:title', (request, response) => {
    findNewsByTitleController.handle(request, response);
});

newsRouter.get('/list-all/:tag-name', (request, response) => {
    findNewsByTagNameController.handle(request, response);
});

newsRouter.get('/list-all', (request, response) => {
    listAllNewsController.handle(request, response);
});

newsRouter.put('/update/:id', (request, response) => {
    updateNewsController.handle(request, response);
});

newsRouter.delete('/delete/:id', (request, response) => {
    deleteNewsController.handle(request, response);
});

export { newsRouter };
