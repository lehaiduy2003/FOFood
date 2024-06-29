/*
  Warnings:

  - The primary key for the `feedbacks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `feedbacks` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `feedbacks` table. All the data in the column will be lost.
  - You are about to drop the `MenuDetail` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[restaurantId]` on the table `Menu` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `restaurantId` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderId` to the `feedbacks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `MenuDetail` DROP FOREIGN KEY `MenuDetail_menuId_fkey`;

-- DropForeignKey
ALTER TABLE `MenuDetail` DROP FOREIGN KEY `MenuDetail_restaurantId_fkey`;

-- DropForeignKey
ALTER TABLE `feedbacks` DROP FOREIGN KEY `feedbacks_userId_fkey`;

-- AlterTable
ALTER TABLE `Beverage` ADD COLUMN `orderCount` INTEGER NULL,
    ADD COLUMN `rate` DOUBLE NULL,
    MODIFY `description` VARCHAR(191) NULL,
    MODIFY `image` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Menu` ADD COLUMN `restaurantId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `feedbacks` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `userId`,
    ADD COLUMN `orderId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`beverageId`, `orderId`);

-- DropTable
DROP TABLE `MenuDetail`;

-- CreateTable
CREATE TABLE `Order` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    INDEX `orders_userId_fkey`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Menu_restaurantId_key` ON `Menu`(`restaurantId`);

-- AddForeignKey
ALTER TABLE `Menu` ADD CONSTRAINT `Menu_restaurantId_fkey` FOREIGN KEY (`restaurantId`) REFERENCES `Restaurant`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `feedbacks` ADD CONSTRAINT `feedbacks_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
