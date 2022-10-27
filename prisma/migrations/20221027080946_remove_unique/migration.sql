/*
  Warnings:

  - A unique constraint covering the columns `[userId,bookId]` on the table `BookReview` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "BookReview_bookId_key";

-- DropIndex
DROP INDEX "BookReview_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "BookReview_userId_bookId_key" ON "BookReview"("userId", "bookId");
