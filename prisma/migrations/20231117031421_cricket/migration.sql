-- CreateTable
CREATE TABLE "cricket_table" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "cricbuzz_personal_info" TEXT NOT NULL,
    "cricbuzz_bat_bowl_summary" TEXT NOT NULL,
    "cricbuzz_about_para" TEXT NOT NULL,
    "cricbuzz_url_id" TEXT NOT NULL,
    "cricinfo_url" TEXT NOT NULL,
    "cricinfo_personal_info" TEXT NOT NULL,
    "cricinfo_teams" TEXT NOT NULL,
    "cricinfo_bio" TEXT NOT NULL,
    "wiki_url" TEXT NOT NULL,
    "wiki_content" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "cricket_table_name_country_idx" ON "cricket_table"("name", "country");
