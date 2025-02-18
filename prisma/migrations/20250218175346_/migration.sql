-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` TEXT NULL,
    `access_token` TEXT NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(191) NULL,

    INDEX `Account_userId_fkey`(`userId`),
    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `id` VARCHAR(191) NOT NULL,
    `sessionToken` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Session_sessionToken_key`(`sessionToken`),
    INDEX `Session_userId_fkey`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `emailVerified` DATETIME(3) NULL,
    `username` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `role` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER',

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Blog` (
    `blogID` INTEGER NOT NULL AUTO_INCREMENT,
    `mainTitle` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `views` INTEGER NOT NULL DEFAULT 0,
    `createdDate` VARCHAR(191) NOT NULL,
    `creatorImage` VARCHAR(191) NULL,
    `creatorName` VARCHAR(191) NOT NULL,
    `coverImage` VARCHAR(191) NULL,
    `tag` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`blogID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Emoji` (
    `emojiID` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `count` INTEGER NOT NULL DEFAULT 0,
    `blogID` INTEGER NOT NULL,

    INDEX `Emoji_blogID_fkey`(`blogID`),
    UNIQUE INDEX `Emoji_blogID_type_key`(`blogID`, `type`),
    PRIMARY KEY (`emojiID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Title` (
    `titleID` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `blogID` INTEGER NOT NULL,

    INDEX `Title_blogID_fkey`(`blogID`),
    PRIMARY KEY (`titleID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Paragraph` (
    `paragraph_id` INTEGER NOT NULL AUTO_INCREMENT,
    `paragraph` VARCHAR(2000) NOT NULL,
    `titleID` INTEGER NOT NULL,

    INDEX `Paragraph_titleID_fkey`(`titleID`),
    PRIMARY KEY (`paragraph_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Image` (
    `imageID` INTEGER NOT NULL AUTO_INCREMENT,
    `image` VARCHAR(191) NOT NULL,
    `titleID` INTEGER NOT NULL,

    INDEX `Image_titleID_fkey`(`titleID`),
    PRIMARY KEY (`imageID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AllImages` (
    `imageID` INTEGER NOT NULL AUTO_INCREMENT,
    `image` VARCHAR(191) NOT NULL,
    `blogID` INTEGER NOT NULL,

    INDEX `Title_blogID_fkey`(`blogID`),
    PRIMARY KEY (`imageID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Account` ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emoji` ADD CONSTRAINT `Emoji_blogID_fkey` FOREIGN KEY (`blogID`) REFERENCES `Blog`(`blogID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Title` ADD CONSTRAINT `Title_blogID_fkey` FOREIGN KEY (`blogID`) REFERENCES `Blog`(`blogID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Paragraph` ADD CONSTRAINT `Paragraph_titleID_fkey` FOREIGN KEY (`titleID`) REFERENCES `Title`(`titleID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_titleID_fkey` FOREIGN KEY (`titleID`) REFERENCES `Title`(`titleID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AllImages` ADD CONSTRAINT `AllImages_blogID_fkey` FOREIGN KEY (`blogID`) REFERENCES `Blog`(`blogID`) ON DELETE CASCADE ON UPDATE CASCADE;
