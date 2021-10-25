import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 120 })
  fullName: string;

  @Column("varchar", { length: 32 })
  sex: string;

  @Column("int", { unsigned: true })
  age: number;

  @Column("date")
  birthday: string;

  @Column("varchar", { length: 120 })
  city: string;
}
