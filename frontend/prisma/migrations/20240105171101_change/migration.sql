/*
  Warnings:

  - You are about to drop the `STARTUPS` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "STARTUPS";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "startups" (
    "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "NAME" TEXT NOT NULL,
    "DESCRIPTION" TEXT,
    "FOUNDED" TEXT NOT NULL,
    "INDUSTRY" TEXT DEFAULT 'Unknown',
    "FUNDING_AMOUNT" INTEGER,
    "INVESTOR" TEXT DEFAULT 'Unknown',
    "INVESTMENT_TYPE" TEXT DEFAULT 'Unknown',
    "CITY" TEXT DEFAULT 'Unknown'
);
