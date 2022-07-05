import {
    Entity,
    BaseEntity,
    Column,
    PrimaryColumn
} from "typeorm";

@Entity({ name: 'dados' })
export class DadosEntity extends BaseEntity {
    @PrimaryColumn()
    id?: number;
     
    @Column()
    nome: string;

    @Column()
    number: string;

    @Column()
    email: string;

    @Column()
    message: string;

    constructor( nome: string, number: string, email:string, message: string){
        super()
        this.nome = nome,
        this.number = number,
        this.email = email,
        this.message = message
    }
}
