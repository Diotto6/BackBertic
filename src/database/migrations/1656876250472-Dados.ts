import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Dados1656876250472 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table(
            {
            name: 'dados',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: true
                },
                {
                    name: 'nome',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'number',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'message',
                    type: 'varchar',
                    isNullable: true
                }
            ]
        })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('dados', true, true, true)
    }

}
