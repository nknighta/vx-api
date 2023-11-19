/*
  Warnings:

  - Added the required column `connect` to the `Test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Test" ADD COLUMN     "connect" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Content" (
    "id" SERIAL NOT NULL,
    "owner" TEXT NOT NULL,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);
