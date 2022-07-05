"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comment_1 = __importDefault(require("../controllers/comment"));
const dados_1 = __importDefault(require("../controllers/dados"));
class Routers {
    init() {
        const router = (0, express_1.Router)();
        const commentController = new comment_1.default;
        const dadosController = new dados_1.default;
        router.get('/', (request, response) => {
            response.json("tudo OK por aqui");
        });
        router.get('/comment', commentController.index);
        router.get('/comment/:id', commentController.show);
        router.post('/comment', commentController.store);
        router.put('/comment/:id', commentController.update);
        router.delete('/comment/:id', commentController.delete);
        router.get('/dados', dadosController.index);
        router.get('/dados/:id', dadosController.show);
        router.post('/dados', dadosController.store);
        router.put('/dados/:id', dadosController.update);
        router.delete('/dados/:id', dadosController.delete);
        return router;
    }
}
exports.default = Routers;
