import { DadosEntity } from '../entities/dados';
import { DadosDTO } from '../../dto/dados';

export class DadosRepository {
    async find() {
        const dados = await DadosEntity.find();

        return dados;
    }

    async findOne(id: number) {
        const dados = await DadosEntity.findOne(id);
        
        return dados;
    }

    async create(dadosDTO: DadosDTO) {
        const dados = await new DadosEntity(dadosDTO.nome, dadosDTO.number, dadosDTO.email, dadosDTO.message);
        dados.save();

        return dados;
    }

    async update(dadosDTO: DadosDTO) {
        const dados = await DadosEntity.findOne(dadosDTO.id);

        if (dados) {
            dados.nome = dadosDTO.nome;
            dados.number = dadosDTO.number;
            dados.email = dadosDTO.email
            await dados.save();
        }

        return dados;
    }

    async delete(dadosID: number) {
        await DadosEntity.delete(dadosID);
    }
}