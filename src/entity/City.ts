import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class City {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 120 })
    name: string;

    @Column("varchar", { length: 120 })
    state: string;
}
