-- AddForeignKey
ALTER TABLE "vehicle" ADD CONSTRAINT "vehicle_color_color_code_fkey" FOREIGN KEY ("color_code") REFERENCES "catalogue"("catalogue_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
