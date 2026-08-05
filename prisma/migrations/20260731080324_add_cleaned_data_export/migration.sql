-- AlterTable
ALTER TABLE "Cleanup" ADD COLUMN     "cleanedData" TEXT,
ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL DEFAULT now() + interval '30 days';
