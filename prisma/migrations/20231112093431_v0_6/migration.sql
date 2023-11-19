-- CreateTable
CREATE TABLE "ServerList" (
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "public" BOOLEAN NOT NULL,
    "owner" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "ServerList_pkey" PRIMARY KEY ("uuid")
);
