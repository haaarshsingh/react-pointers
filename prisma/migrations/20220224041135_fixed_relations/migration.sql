-- DropForeignKey
ALTER TABLE "Track" DROP CONSTRAINT "Track_userId_fkey";

-- AlterTable
ALTER TABLE "Track" ALTER COLUMN "private" SET DEFAULT false,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "likes" SET DEFAULT 0,
ALTER COLUMN "title" SET DEFAULT E'Untitled Track';

-- AddForeignKey
ALTER TABLE "Track" ADD CONSTRAINT "Track_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
