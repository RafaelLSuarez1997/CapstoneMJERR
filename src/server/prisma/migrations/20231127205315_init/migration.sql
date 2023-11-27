/*
  Warnings:

  - You are about to alter the column `size` on the `Shoes` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Shoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "brand" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "size" REAL NOT NULL
);
INSERT INTO "new_Shoes" ("brand", "category", "id", "size") SELECT "brand", "category", "id", "size" FROM "Shoes";
DROP TABLE "Shoes";
ALTER TABLE "new_Shoes" RENAME TO "Shoes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
