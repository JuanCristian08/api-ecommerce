import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProduto1751467003815 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
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
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('produto');
    }

}
