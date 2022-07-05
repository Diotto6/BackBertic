"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dados_1 = require("../services/dados");
class DadosController {
    async index(request, response) {
        const service = new dados_1.DadosService();
        const dados = await service.find();
        return response.json(dados);
    }
    async show(request, response) {
        const { id } = request.params;
        const service = new dados_1.DadosService();
        const dados = await service.findOne(parseInt(id));
        return response.json(dados);
    }
    async store(request, response) {
        const { nome, number, email, message } = request.body;
        const dadosService = new dados_1.DadosService();
        ;
        const dto = {
            nome,
            number,
            email,
            message
        };
        const dadosCreate = await dadosService.create(dto);
        return response.json(dadosCreate);
    }
    async update(request, response) {
        const { id } = request.params;
        const { nome, number, email, message } = request.body;
        const dadosService = new dados_1.DadosService();
        const dadosUp = await dadosService.update({
            id: parseInt(id),
            nome,
            number,
            email,
            message
        });
        return response.json(dadosUp);
    }
    async delete(request, response) {
        const { id } = request.params;
        const dadosService = new dados_1.DadosService();
        await dadosService.delete(parseInt(id));
        return response.sendStatus(204);
    }
}
exports.default = DadosController;
;
