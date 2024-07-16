/*
  Warnings:

  - You are about to drop the `orderDetails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `orderDetails` DROP FOREIGN KEY `orderDetails_beverageId_fkey`;

-- DropForeignKey
ALTER TABLE `orderDetails` DROP FOREIGN KEY `orderDetails_userId_fkey`;

-- DropTable
DROP TABLE `orderDetails`;

-- CreateTable
CREATE TABLE `order` (
    `beverageId` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `orderAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` VARCHAR(191) NOT NULL DEFAULT 'pending',
    `rate` DOUBLE NULL,
    `comment` VARCHAR(191) NULL,

    INDEX `orders_restaurantId_fkey`(`beverageId`),
    PRIMARY KEY (`beverageId`, `phone`, `orderAt`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_beverageId_fkey` FOREIGN KEY (`beverageId`) REFERENCES `beverages`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
