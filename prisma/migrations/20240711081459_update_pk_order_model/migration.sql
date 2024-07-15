/*
  Warnings:

  - The primary key for the `orderDetails` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `orderDetails` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`beverageId`, `userId`, `orderAt`);
