"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DadosService = void 0;
const dados_1 = require("../database/repositories/dados");
class DadosService {
    async find() {
        const repository = new dados_1.DadosRepository();
        const dados = await repository.find();
        return dados;
    }
    async findOne(id) {
        const repository = new dados_1.DadosRepository();
        const dados = await repository.findOne(id);
        return dados;
    }
    async create(dadosDTO) {
        const repository = new dados_1.DadosRepository();
        const dados = await repository.create(dadosDTO);
        return dados;
    }
    async update(dadosDTO) {
        const repository = new dados_1.DadosRepository();
        const dados = await repository.update(dadosDTO);
        return dados;
    }
    async delete(dadosID) {
        const repository = new dados_1.DadosRepository();
        await repository.delete(dadosID);
    }
}
exports.DadosService = DadosService;
