-- AlterTable
ALTER TABLE `orderDetails` ADD COLUMN `status` VARCHAR(191) NOT NULL DEFAULT 'pending',
    MODIFY `total` DOUBLE NULL;
