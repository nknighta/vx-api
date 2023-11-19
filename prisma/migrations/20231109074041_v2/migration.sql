/*
  Warnings:

  - You are about to drop the column `connect` on the `Test` table. All the data in the column will be lost.
  - You are about to drop the `Content` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `email` to the `Test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Test" DROP COLUMN "connect",
ADD COLUMN     "email" TEXT NOT NULL;

-- DropTable
DROP TABLE "Content";
