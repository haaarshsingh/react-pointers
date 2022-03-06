/*
  Warnings:

  - Made the column `trackSlug` on table `Like` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_trackSlug_fkey";

-- AlterTable
ALTER TABLE "Like" ALTER COLUMN "trackSlug" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_trackSlug_fkey" FOREIGN KEY ("trackSlug") REFERENCES "Track"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
