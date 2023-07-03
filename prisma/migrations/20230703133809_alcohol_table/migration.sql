-- CreateTable
CREATE TABLE "Alcohol" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "degree" INTEGER NOT NULL,
    "creator" TEXT NOT NULL,
    "additionals" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "AlcSearchKey" (
    "searchKey" TEXT NOT NULL PRIMARY KEY,
    "destinationId" INTEGER NOT NULL,
    CONSTRAINT "AlcSearchKey_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Alcohol" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Alcohol_title_key" ON "Alcohol"("title");

-- CreateIndex
CREATE UNIQUE INDEX "AlcSearchKey_searchKey_key" ON "AlcSearchKey"("searchKey");
