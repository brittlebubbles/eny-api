/*
  Warnings:

  - Changed the type of `weather_report` on the `IncidentReport` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "IncidentReport" DROP COLUMN "weather_report",
ADD COLUMN     "weather_report" JSONB NOT NULL;
