-- CreateTable
CREATE TABLE "Message" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cellphone" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "reply" TEXT,
    "json" TEXT
);
