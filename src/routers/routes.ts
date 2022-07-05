import { Router } from "express";
import { Request, Response } from 'express'
import CommentController from "../controllers/comment";
import DadosController from "../controllers/dados";

export default class Routers {
    init() {
        const router = Router();
        const commentController = new CommentController;
        const dadosController = new DadosController

        router.get('/' , (request: Request, response: Response) => {
            response.json("tudo OK por aqui")
        })

        router.get('/comment', commentController.index)
        router.get('/comment/:id', commentController.show);
        router.post('/comment', commentController.store);
        router.put('/comment/:id', commentController.update);
        router.delete('/comment/:id', commentController.delete);

        router.get('/dados', dadosController.index)
        router.get('/dados/:id', dadosController.show);
        router.post('/dados', dadosController.store);
        router.put('/dados/:id', dadosController.update);
        router.delete('/dados/:id', dadosController.delete);
     
        return router;
    }
}