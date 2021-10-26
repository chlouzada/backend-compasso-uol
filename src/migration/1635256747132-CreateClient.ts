import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClient1635256747132 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "client",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "sex",
            type: "varchar",
          },
          {
            name: "age",
            type: "int",
          },
          {
            name: "birthday",
            type: "date",
          },
          {
            name: "city",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("client");
  }
}
