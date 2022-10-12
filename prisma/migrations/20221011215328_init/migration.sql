-- CreateTable
CREATE TABLE "IncidentReport" (
    "id" SERIAL NOT NULL,
    "client_id" INTEGER NOT NULL,
    "incident_desc" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "weather_report" TEXT NOT NULL,

    CONSTRAINT "IncidentReport_pkey" PRIMARY KEY ("id")
);
