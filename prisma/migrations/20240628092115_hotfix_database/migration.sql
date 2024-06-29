/*
  Warnings:

  - You are about to drop the column `restaurantId` on the `Restaurant` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantLicenseId` on the `Restaurant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Restaurant` DROP COLUMN `restaurantId`,
    DROP COLUMN `restaurantLicenseId`;
