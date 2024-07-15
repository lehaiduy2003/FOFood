/*
  Warnings:

  - The primary key for the `orderDetails` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `orderId` on the `orderDetails` table. All the data in the column will be lost.
  - You are about to drop the `orders` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `total` to the `orderDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `orderDetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `orderDetails` DROP FOREIGN KEY `orderDetails_orderId_fkey`;

-- DropForeignKey
ALTER TABLE `orders` DROP FOREIGN KEY `orders_userId_fkey`;

-- AlterTable
ALTER TABLE `orderDetails` DROP PRIMARY KEY,
    DROP COLUMN `orderId`,
    ADD COLUMN `total` DOUBLE NOT NULL,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`beverageId`, `userId`);

-- DropTable
DROP TABLE `orders`;

-- AddForeignKey
ALTER TABLE `orderDetails` ADD CONSTRAINT `orderDetails_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
