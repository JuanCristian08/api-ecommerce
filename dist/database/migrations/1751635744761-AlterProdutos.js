"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlterProdutos1751635744761 = void 0;
const typeorm_1 = require("typeorm");
class AlterProdutos1751635744761 {
    async up(queryRunner) {
        await queryRunner.addColumns('produto', [
            new typeorm_1.TableColumn({
                name: 'quantidade',
                type: 'int',
                isNullable: false,
                default: 0
            }),
            new typeorm_1.TableColumn({
                name: "ncm",
                type: "char",
                length: "8",
                isNullable: false
            })
        ]);
    }
    async down(queryRunner) {
        await queryRunner.dropColumns('produto', [
            "quantidade", "ncm"
        ]);
    }
}
exports.AlterProdutos1751635744761 = AlterProdutos1751635744761;
