import { DadosRepository } from '../database/repositories/dados';
import { DadosDTO } from '../dto/dados'

export class DadosService {
    async find() {
        const repository = new DadosRepository();
        const dados = await repository.find();

        return dados;
    }

    async findOne(id: number) {
        const repository = new DadosRepository();
        const dados = await repository.findOne(id);

        return dados;
    }

    async create(dadosDTO:DadosDTO) {
        const repository = new DadosRepository();
        const dados = await repository.create(dadosDTO);

        return dados;
    }

    async update(dadosDTO: DadosDTO) {
        const repository = new DadosRepository();
        const dados = await repository.update(dadosDTO);

        return dados;
    }

    async delete(dadosID: number) {
        const repository = new DadosRepository();
        await repository.delete(dadosID);
    }
}