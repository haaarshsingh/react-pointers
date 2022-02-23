/*
  Warnings:

  - Added the required column `likes` to the `Track` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Track" ADD COLUMN     "likes" INTEGER NOT NULL;
