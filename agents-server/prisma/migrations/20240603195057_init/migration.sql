-- CreateTable
CREATE TABLE "AgentWorkflow" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "task" TEXT NOT NULL,
    "resources" TEXT NOT NULL,
    "nwc_string" TEXT NOT NULL,
    "budget" REAL NOT NULL
);
