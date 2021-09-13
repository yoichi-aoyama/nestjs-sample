import {MigrationInterface, QueryRunner} from "typeorm";

export class createMemo1631548397259 implements MigrationInterface {
    name = 'createMemo1631548397259'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "memo" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(500) NOT NULL, "description" text NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "memo"`);
    }

}
