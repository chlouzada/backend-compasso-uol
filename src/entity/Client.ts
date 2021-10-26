import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  sex: string;

  @Column()
  age: number;

  @Column("date")
  birthday: string;

  @Column()
  city: string;
}
