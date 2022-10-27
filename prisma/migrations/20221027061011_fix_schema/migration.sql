/*
  Warnings:

  - You are about to drop the column `toReadListId` on the `Book` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[identifierId]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `identifierId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_toReadListId_fkey";

-- DropIndex
DROP INDEX "Book_toReadListId_key";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "toReadListId",
ADD COLUMN     "identifierId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_BookToToReadList" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BookToToReadList_AB_unique" ON "_BookToToReadList"("A", "B");

-- CreateIndex
CREATE INDEX "_BookToToReadList_B_index" ON "_BookToToReadList"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Book_identifierId_key" ON "Book"("identifierId");

-- AddForeignKey
ALTER TABLE "_BookToToReadList" ADD CONSTRAINT "_BookToToReadList_A_fkey" FOREIGN KEY ("A") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToToReadList" ADD CONSTRAINT "_BookToToReadList_B_fkey" FOREIGN KEY ("B") REFERENCES "ToReadList"("id") ON DELETE CASCADE ON UPDATE CASCADE;
