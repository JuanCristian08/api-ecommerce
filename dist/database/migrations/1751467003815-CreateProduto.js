"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProduto1751467003815 = void 0;
const typeorm_1 = require("typeorm");
class CreateProduto1751467003815 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'produto',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'nome',
                    type: 'varchar',
                    length: '255'
                },
                {
                    name: 'preco',
                    type: 'decimal',
                    precision: 10,
                    scale: 2
                },
                {
                    name: 'descricao',
                    type: 'text',
                    isNullable: true
                },
                {
                    name: 'ativo',
                    type: 'boolean',
                    default: true
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('produto');
    }
}
exports.CreateProduto1751467003815 = CreateProduto1751467003815;
