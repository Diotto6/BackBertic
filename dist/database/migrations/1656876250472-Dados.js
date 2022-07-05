"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dados1656876250472 = void 0;
const typeorm_1 = require("typeorm");
class Dados1656876250472 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('dados', true, true, true);
    }
}
exports.Dados1656876250472 = Dados1656876250472;
