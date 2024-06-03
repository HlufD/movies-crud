/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Movie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserMovie` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_channelId_fkey";

-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_typeId_fkey";

-- DropForeignKey
ALTER TABLE "UserMovie" DROP CONSTRAINT "UserMovie_movieId_fkey";

-- DropForeignKey
ALTER TABLE "UserMovie" DROP CONSTRAINT "UserMovie_userId_fkey";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Movie";

-- DropTable
DROP TABLE "Type";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "UserMovie";

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Types" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movies" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "videoUrl" TEXT,
    "channelId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserMovies" (
    "userId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "UserMovies_pkey" PRIMARY KEY ("userId","movieId","status")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Movies" ADD CONSTRAINT "Movies_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movies" ADD CONSTRAINT "Movies_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movies" ADD CONSTRAINT "Movies_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMovies" ADD CONSTRAINT "UserMovies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMovies" ADD CONSTRAINT "UserMovies_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
