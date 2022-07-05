import express from 'express';
import cors from 'cors';

import Database from './database/connections/Database';
import Routers from './routers/routes';

export default class Application {
    readonly #express: express.Application;


    constructor() {
        this.#express = express();
    }

    async init() {        
        this.config();
        this.routers();
        await this.database();
       
    }

    start(port: number){
        this.#express.listen(port, () => {
            console.log(`A aplicação está rodando na porta ${port}...`); 
        });
    }


    private config() {
        this.#express.use(express.json());
        this.#express.use(express.urlencoded({ extended: false }));
        this.#express.use(cors());
    }

    private routers() {

        const Router = new Routers().init();
        this.#express.use(Router);
    }

    private async database() {
        await Database.getInstance();
    }
};