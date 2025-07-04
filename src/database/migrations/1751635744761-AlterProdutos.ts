import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterProdutos1751635744761 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('produto', [
            new TableColumn({
                name: 'quantidade',
                type: 'int',
                isNullable: false,
                default: 0
            }),
            new TableColumn({
                name: "ncm",
                type: "char",
                length: "8",
                isNullable: false
            })
        ]);
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns('produto', [
            "quantidade", "ncm"
        ]);
    }

}
