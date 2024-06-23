/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Payment` ADD COLUMN `qrCode` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Restaurant` ADD COLUMN `rate` DOUBLE NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `phone` VARCHAR(20) NULL,
    MODIFY `name` VARCHAR(255) NULL;

-- CreateTable
CREATE TABLE `feedbacks` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `beverageId` VARCHAR(191) NOT NULL,
    `rate` DOUBLE NOT NULL,
    `comment` VARCHAR(191) NULL,

    INDEX `feedbacks_userId_fkey`(`userId`),
    INDEX `feedbacks_restaurantId_fkey`(`beverageId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `users_phone_key` ON `users`(`phone`);

-- AddForeignKey
ALTER TABLE `feedbacks` ADD CONSTRAINT `feedbacks_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `feedbacks` ADD CONSTRAINT `feedbacks_beverageId_fkey` FOREIGN KEY (`beverageId`) REFERENCES `Beverage`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
