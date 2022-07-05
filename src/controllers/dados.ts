import { Request, Response } from 'express';
import { DadosService } from '../services/dados';
import { DadosDTO } from '../dto/dados';

export default class DadosController {
    async index(request: Request, response: Response) {
        const service = new DadosService();
        const dados = await service.find();       

        return response.json(dados);
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const service = new DadosService();
        const dados = await service.findOne(parseInt(id));
        
        return response.json(dados);
    }

    async store(request: Request, response: Response) {
        const { nome, number, email, message } = request.body;
        const dadosService = new DadosService();;
        const dto: DadosDTO = {
            nome,
            number, 
            email,
            message
        };


        const dadosCreate = await dadosService.create(dto);

        return response.json(dadosCreate);
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { nome, number, email, message} = request.body;
        const dadosService = new DadosService();
        const dadosUp = await dadosService.update({
            id: parseInt(id),
            nome,
            number, 
            email,
            message
        });

        return response.json(dadosUp);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const dadosService = new DadosService();
        await dadosService.delete(parseInt(id));

        return response.sendStatus(204);
    }
};
