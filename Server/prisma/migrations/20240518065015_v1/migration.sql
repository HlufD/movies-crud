/*
  Warnings:

  - You are about to drop the `Channel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Movies" DROP CONSTRAINT "Movies_channelId_fkey";

-- DropTable
DROP TABLE "Channel";

-- CreateTable
CREATE TABLE "Channels" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Channels_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Movies" ADD CONSTRAINT "Movies_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
