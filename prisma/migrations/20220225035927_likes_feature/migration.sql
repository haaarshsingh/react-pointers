/*
  Warnings:

  - You are about to drop the column `likes` on the `Track` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Track" DROP COLUMN "likes";

-- CreateTable
CREATE TABLE "Like" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "trackSlug" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_trackSlug_fkey" FOREIGN KEY ("trackSlug") REFERENCES "Track"("slug") ON DELETE SET NULL ON UPDATE CASCADE;
