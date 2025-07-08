import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("produtos")
export class Produto{
    @PrimaryGeneratedColumn()
    id!: Number;

    @Column()
    nome!: String;

    @Column()
    preco!: Number;

    @Column()
    descricao!: String;

    @Column()
    ncm!: String;

    @Column()
    quantidade!: Number;
}