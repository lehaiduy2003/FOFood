-- CreateTable
CREATE TABLE `UserAccount` (
    `id` VARCHAR(191) NOT NULL,
    `isRestaurantOwner` BOOLEAN NOT NULL DEFAULT false,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserInformation` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    UNIQUE INDEX `UserInformation_userId_key`(`userId`),
    UNIQUE INDEX `UserInformation_phone_key`(`phone`),
    UNIQUE INDEX `UserInformation_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserAccount` ADD CONSTRAINT `UserAccount_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `UserInformation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
