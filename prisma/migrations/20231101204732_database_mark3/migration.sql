/*
  Warnings:

  - You are about to drop the column `color_code` on the `model` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "model" DROP CONSTRAINT "model_color_code_fkey";

-- AlterTable
ALTER TABLE "model" DROP COLUMN "color_code";
