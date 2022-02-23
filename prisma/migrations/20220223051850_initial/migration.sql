-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'Groovi User',
    "username" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Track" (
    "id" INTEGER NOT NULL,
    "slug" VARCHAR(20) NOT NULL,
    "private" BOOLEAN NOT NULL,
    "sounds" JSONB[],
    "userId" TEXT NOT NULL,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Track_slug_key" ON "Track"("slug");

-- AddForeignKey
ALTER TABLE "Track" ADD CONSTRAINT "Track_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
