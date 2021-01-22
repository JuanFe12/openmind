import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1611358166934 implements MigrationInterface {
    name = 'CreateTables1611358166934'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isAteacher" boolean NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courses" ("id" SERIAL NOT NULL, "nameCourse" character varying NOT NULL, "photoCourse" character varying NOT NULL, "videosCourse" character varying NOT NULL, "price" character varying NOT NULL, "descriprionCourse" character varying NOT NULL, "sinews" character varying NOT NULL, CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courses_users_user" ("coursesId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_52b523cf0c1fb2b5314c81a4f85" PRIMARY KEY ("coursesId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6f924df5c034eb0d28618470a6" ON "courses_users_user" ("coursesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6bcbeb70543c43de410f8d5b3c" ON "courses_users_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "courses_users_user" ADD CONSTRAINT "FK_6f924df5c034eb0d28618470a68" FOREIGN KEY ("coursesId") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courses_users_user" ADD CONSTRAINT "FK_6bcbeb70543c43de410f8d5b3ca" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courses_users_user" DROP CONSTRAINT "FK_6bcbeb70543c43de410f8d5b3ca"`);
        await queryRunner.query(`ALTER TABLE "courses_users_user" DROP CONSTRAINT "FK_6f924df5c034eb0d28618470a68"`);
        await queryRunner.query(`DROP INDEX "IDX_6bcbeb70543c43de410f8d5b3c"`);
        await queryRunner.query(`DROP INDEX "IDX_6f924df5c034eb0d28618470a6"`);
        await queryRunner.query(`DROP TABLE "courses_users_user"`);
        await queryRunner.query(`DROP TABLE "courses"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
