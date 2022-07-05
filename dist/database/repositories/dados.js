"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DadosRepository = void 0;
const dados_1 = require("../entities/dados");
class DadosRepository {
    async find() {
        const dados = await dados_1.DadosEntity.find();
        return dados;
    }
    async findOne(id) {
        const dados = await dados_1.DadosEntity.findOne(id);
        return dados;
    }
    async create(dadosDTO) {
        const dados = await new dados_1.DadosEntity(dadosDTO.nome, dadosDTO.number, dadosDTO.email, dadosDTO.message);
        dados.save();
        return dados;
    }
    async update(dadosDTO) {
        const dados = await dados_1.DadosEntity.findOne(dadosDTO.id);
        if (dados) {
            dados.nome = dadosDTO.nome;
            dados.number = dadosDTO.number;
            dados.email = dadosDTO.email;
            await dados.save();
        }
        return dados;
    }
    async delete(dadosID) {
        await dados_1.DadosEntity.delete(dadosID);
    }
}
exports.DadosRepository = DadosRepository;
