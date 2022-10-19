/*
  Warnings:

  - You are about to drop the column `toreadlistId` on the `Book` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[toReadListId]` on the table `Book` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_toreadlistId_fkey";

-- DropIndex
DROP INDEX "Book_toreadlistId_key";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "toreadlistId",
ADD COLUMN     "toReadListId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Book_toReadListId_key" ON "Book"("toReadListId");

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_toReadListId_fkey" FOREIGN KEY ("toReadListId") REFERENCES "ToReadList"("id") ON DELETE SET NULL ON UPDATE CASCADE;
