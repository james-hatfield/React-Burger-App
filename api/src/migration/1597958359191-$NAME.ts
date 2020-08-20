import {MigrationInterface, QueryRunner} from "typeorm";

export class $NAME1597958359191 implements MigrationInterface {
    name = '$NAME1597958359191'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" int NOT NULL IDENTITY(1,1), "street" nvarchar(255) NOT NULL, "zipCode" nvarchar(255) NOT NULL, "country" nvarchar(255) NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customer" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "addressId" int, CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_7697a356e1f4b79ab3819839e9" ON "customer" ("addressId") WHERE "addressId" IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "ingredients" ("id" int NOT NULL IDENTITY(1,1), "meat" int NOT NULL, "cheese" int NOT NULL, "salad" int NOT NULL, "bacon" int NOT NULL, "breadTop" int NOT NULL, "breadBottom" int NOT NULL, CONSTRAINT "PK_9240185c8a5507251c9f15e0649" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" int NOT NULL IDENTITY(1,1), "price" int NOT NULL, "ingredientsId" int, "customerId" int, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_6b72c9e5cc2beacd269f939fae" ON "order" ("ingredientsId") WHERE "ingredientsId" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_124456e637cca7a415897dce65" ON "order" ("customerId") WHERE "customerId" IS NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ADD CONSTRAINT "FK_7697a356e1f4b79ab3819839e95" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_6b72c9e5cc2beacd269f939faeb" FOREIGN KEY ("ingredientsId") REFERENCES "ingredients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_124456e637cca7a415897dce659" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_124456e637cca7a415897dce659"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_6b72c9e5cc2beacd269f939faeb"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP CONSTRAINT "FK_7697a356e1f4b79ab3819839e95"`);
        await queryRunner.query(`DROP INDEX "REL_124456e637cca7a415897dce65" ON "order"`);
        await queryRunner.query(`DROP INDEX "REL_6b72c9e5cc2beacd269f939fae" ON "order"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "ingredients"`);
        await queryRunner.query(`DROP INDEX "REL_7697a356e1f4b79ab3819839e9" ON "customer"`);
        await queryRunner.query(`DROP TABLE "customer"`);
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
