import { Router } from "express";
import { createTagController } from "../modules/tags/useCases/createTag";
import { findAllTagsController } from "../modules/tags/useCases/findAll";
import { findTagByIdController } from "../modules/tags/useCases/findTagById";
import { findTagByNameController } from "../modules/tags/useCases/findTagByName";
import { updateTagController } from "../modules/tags/useCases/updateTag";
import { deleteTagController } from "../modules/tags/useCases/deleteTag";

const tagRouter = Router();

// tagRouter.route('/tag');

tagRouter.post('/create', (request, response) => {
    createTagController.handle(request, response);
});

tagRouter.get('/get/:id', (request, response) => {
    findTagByIdController.handle(request, response);
});

tagRouter.get('/get-by-name/:name', (request, response) => {
    findTagByNameController.handle(request, response);
});

tagRouter.get('/list-all', (request, response) => {
    findAllTagsController.handle(request, response);
});

tagRouter.put('/update/:id', (request, response) => {
    updateTagController.handle(request, response);
});

tagRouter.delete('/delete/:id', (request, response) => {
    deleteTagController.handle(request, response);
});

export { tagRouter };
