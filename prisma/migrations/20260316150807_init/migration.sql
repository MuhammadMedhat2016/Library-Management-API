/*
  Warnings:

  - The primary key for the `book` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `borrow_requests` DROP FOREIGN KEY `borrow_requests_isbn_fkey`;

-- DropIndex
DROP INDEX `borrow_requests_isbn_fkey` ON `borrow_requests`;

-- AlterTable
ALTER TABLE `book` DROP PRIMARY KEY,
    MODIFY `isbn` CHAR(13) NOT NULL,
    ADD PRIMARY KEY (`isbn`);

-- AlterTable
ALTER TABLE `borrow_requests` MODIFY `isbn` CHAR(13) NOT NULL;

-- AddForeignKey
ALTER TABLE `borrow_requests` ADD CONSTRAINT `borrow_requests_isbn_fkey` FOREIGN KEY (`isbn`) REFERENCES `book`(`isbn`) ON DELETE RESTRICT ON UPDATE CASCADE;
