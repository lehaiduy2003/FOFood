/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `restaurants` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `restaurants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `restaurants` ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `restaurants_userId_key` ON `restaurants`(`userId`);

-- AddForeignKey
ALTER TABLE `restaurants` ADD CONSTRAINT `restaurants_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
