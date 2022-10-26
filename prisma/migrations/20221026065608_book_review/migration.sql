/*
  Warnings:

  - Added the required column `content` to the `BookReview` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BookReview" ADD COLUMN     "content" TEXT NOT NULL;
