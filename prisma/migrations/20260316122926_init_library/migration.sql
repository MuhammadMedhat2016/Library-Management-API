-- CreateTable
CREATE TABLE `borrower` (
    `bid` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(128) NOT NULL,
    `b_name` VARCHAR(128) NULL,
    `registeration_date` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `borrower_email_key`(`email`),
    PRIMARY KEY (`bid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `book` (
    `isbn` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(128) NOT NULL,
    `author` VARCHAR(128) NOT NULL,
    `location` VARCHAR(128) NULL,
    `available_qty` INTEGER NULL DEFAULT 0,

    PRIMARY KEY (`isbn`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `borrow_requests` (
    `request_id` INTEGER NOT NULL AUTO_INCREMENT,
    `bid` INTEGER NOT NULL,
    `isbn` INTEGER NOT NULL,
    `request_date` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `returned_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`request_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `borrow_requests` ADD CONSTRAINT `borrow_requests_bid_fkey` FOREIGN KEY (`bid`) REFERENCES `borrower`(`bid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `borrow_requests` ADD CONSTRAINT `borrow_requests_isbn_fkey` FOREIGN KEY (`isbn`) REFERENCES `book`(`isbn`) ON DELETE RESTRICT ON UPDATE CASCADE;
