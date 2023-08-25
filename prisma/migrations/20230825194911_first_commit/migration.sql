-- CreateTable
CREATE TABLE `Message` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `cellphone` VARCHAR(191) NOT NULL,
    `text` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `reply` VARCHAR(191) NULL,
    `json` JSON NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
