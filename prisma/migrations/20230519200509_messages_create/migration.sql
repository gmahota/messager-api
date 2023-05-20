-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cellphone" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "reply" TEXT,
    "json" JSONB,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);
