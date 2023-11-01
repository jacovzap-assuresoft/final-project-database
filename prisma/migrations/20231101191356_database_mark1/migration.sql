-- CreateTable
CREATE TABLE "address" (
    "address_id" SERIAL NOT NULL,
    "address_dir" VARCHAR(200),
    "location" VARCHAR(150),
    "number" INTEGER,

    CONSTRAINT "address_pkey" PRIMARY KEY ("address_id")
);

-- CreateTable
CREATE TABLE "catalogue" (
    "catalogue_id" SERIAL NOT NULL,
    "type" VARCHAR(50),
    "code" VARCHAR(50),
    "description" VARCHAR(150),

    CONSTRAINT "catalogue_pkey" PRIMARY KEY ("catalogue_id")
);

-- CreateTable
CREATE TABLE "commission" (
    "commission_id" SERIAL NOT NULL,
    "employee_id" INTEGER,
    "description" VARCHAR(255),
    "amount" DECIMAL(5,2) NOT NULL,

    CONSTRAINT "commission_pkey" PRIMARY KEY ("commission_id")
);

-- CreateTable
CREATE TABLE "customer" (
    "customer_id" SERIAL NOT NULL,
    "address_id" INTEGER,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "customer_contact" (
    "contact_id" SERIAL NOT NULL,
    "customer_id" INTEGER,
    "type" VARCHAR(30),
    "value" VARCHAR(150),

    CONSTRAINT "customer_contact_pkey" PRIMARY KEY ("contact_id")
);

-- CreateTable
CREATE TABLE "employee" (
    "employee_id" SERIAL NOT NULL,
    "first_name" VARCHAR(80),
    "last_name" VARCHAR(80),
    "birth_date" DATE,
    "address_id" INTEGER,
    "store_id" INTEGER,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("employee_id")
);

-- CreateTable
CREATE TABLE "employee_contact" (
    "contact_id" SERIAL NOT NULL,
    "employee_id" INTEGER,
    "contact_type" VARCHAR(30),
    "contact_value" VARCHAR(150),

    CONSTRAINT "employee_contact_pkey" PRIMARY KEY ("contact_id")
);

-- CreateTable
CREATE TABLE "juridical" (
    "juridical_id" SERIAL NOT NULL,
    "customer_id" INTEGER,
    "name" VARCHAR(180),

    CONSTRAINT "juridical_pkey" PRIMARY KEY ("juridical_id")
);

-- CreateTable
CREATE TABLE "model" (
    "model_id" SERIAL NOT NULL,
    "name" VARCHAR(80),
    "brand_code" INTEGER,
    "model_date" DATE,
    "description" VARCHAR(150),
    "price" DECIMAL(12,2),
    "color_code" INTEGER,

    CONSTRAINT "model_pkey" PRIMARY KEY ("model_id")
);

-- CreateTable
CREATE TABLE "payment" (
    "payment_id" SERIAL NOT NULL,
    "payment_date" DATE,
    "payment_detail_id" INTEGER,
    "employee_id" INTEGER,
    "sale_id" INTEGER,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("payment_id")
);

-- CreateTable
CREATE TABLE "payment_detail" (
    "payment_detail_id" SERIAL NOT NULL,
    "description" VARCHAR(200),
    "type_code" INTEGER,
    "currency_code" INTEGER,
    "amount" DECIMAL(12,2),
    "receipt_code" VARCHAR(50),

    CONSTRAINT "payment_detail_pkey" PRIMARY KEY ("payment_detail_id")
);

-- CreateTable
CREATE TABLE "physical" (
    "physical_id" SERIAL NOT NULL,
    "customer_id" INTEGER,
    "first_name" VARCHAR(80),
    "last_name" VARCHAR(80),
    "birth_date" DATE,

    CONSTRAINT "physical_pkey" PRIMARY KEY ("physical_id")
);

-- CreateTable
CREATE TABLE "reserve" (
    "reserve_id" SERIAL NOT NULL,
    "currency_code" INTEGER,
    "cost" DECIMAL(4,2),
    "customer_id" INTEGER,
    "vehicle_id" INTEGER,
    "payment_id" INTEGER,

    CONSTRAINT "reserve_pkey" PRIMARY KEY ("reserve_id")
);

-- CreateTable
CREATE TABLE "salary" (
    "salary_id" SERIAL NOT NULL,
    "employee_id" INTEGER,
    "start_date" DATE NOT NULL,
    "end_date" DATE NOT NULL,
    "payment_date" DATE NOT NULL,
    "currency_code" INTEGER,
    "amount" DECIMAL(12,2),

    CONSTRAINT "salary_pkey" PRIMARY KEY ("salary_id")
);

-- CreateTable
CREATE TABLE "sale" (
    "sale_id" SERIAL NOT NULL,
    "state_code" INTEGER,
    "payment_id" INTEGER,
    "customer_id" INTEGER,
    "employee_id" INTEGER,
    "vehicle_id" INTEGER,

    CONSTRAINT "sale_pkey" PRIMARY KEY ("sale_id")
);

-- CreateTable
CREATE TABLE "stock" (
    "stock_id" SERIAL NOT NULL,
    "name" VARCHAR(120),
    "phone" VARCHAR(11),
    "address_id" INTEGER,
    "store_id" INTEGER,

    CONSTRAINT "stock_pkey" PRIMARY KEY ("stock_id")
);

-- CreateTable
CREATE TABLE "store" (
    "store_id" SERIAL NOT NULL,
    "phone" VARCHAR(11),
    "address_id" INTEGER,

    CONSTRAINT "store_pkey" PRIMARY KEY ("store_id")
);

-- CreateTable
CREATE TABLE "vehicle" (
    "vehicle_id" SERIAL NOT NULL,
    "model_id" INTEGER,
    "stock_id" INTEGER,
    "identify_number" VARCHAR(10),
    "chasis_number" INTEGER NOT NULL,
    "color_code" INTEGER,

    CONSTRAINT "vehicle_pkey" PRIMARY KEY ("vehicle_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "store_address_id_key" ON "store"("address_id");

-- AddForeignKey
ALTER TABLE "commission" ADD CONSTRAINT "commission_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("employee_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "customer" ADD CONSTRAINT "customer_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "address"("address_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "customer_contact" ADD CONSTRAINT "customer_contact_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer"("customer_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "address"("address_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "store"("store_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "employee_contact" ADD CONSTRAINT "employee_contact_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("employee_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "juridical" ADD CONSTRAINT "juridical_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer"("customer_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "model" ADD CONSTRAINT "model_brand_code_fkey" FOREIGN KEY ("brand_code") REFERENCES "catalogue"("catalogue_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "model" ADD CONSTRAINT "model_color_code_fkey" FOREIGN KEY ("color_code") REFERENCES "catalogue"("catalogue_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("employee_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_payment_detail_id_fkey" FOREIGN KEY ("payment_detail_id") REFERENCES "payment_detail"("payment_detail_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_sale_id_fkey" FOREIGN KEY ("sale_id") REFERENCES "sale"("sale_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "physical" ADD CONSTRAINT "physical_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer"("customer_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reserve" ADD CONSTRAINT "reserve_currency_code_fkey" FOREIGN KEY ("currency_code") REFERENCES "catalogue"("catalogue_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reserve" ADD CONSTRAINT "reserve_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer"("customer_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reserve" ADD CONSTRAINT "reserve_payment_id_fkey" FOREIGN KEY ("payment_id") REFERENCES "payment"("payment_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reserve" ADD CONSTRAINT "reserve_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "vehicle"("vehicle_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "salary" ADD CONSTRAINT "salary_currency_code_fkey" FOREIGN KEY ("currency_code") REFERENCES "catalogue"("catalogue_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "salary" ADD CONSTRAINT "salary_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("employee_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sale" ADD CONSTRAINT "sale_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer"("customer_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sale" ADD CONSTRAINT "sale_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("employee_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sale" ADD CONSTRAINT "sale_state_code_fkey" FOREIGN KEY ("state_code") REFERENCES "catalogue"("catalogue_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sale" ADD CONSTRAINT "sale_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "vehicle"("vehicle_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "stock" ADD CONSTRAINT "stock_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "store"("store_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "stock" ADD CONSTRAINT "stock_store_id_fkey1" FOREIGN KEY ("address_id") REFERENCES "address"("address_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "store" ADD CONSTRAINT "store_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "address"("address_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "vehicle" ADD CONSTRAINT "vehicle_model_id_fkey" FOREIGN KEY ("model_id") REFERENCES "model"("model_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "vehicle" ADD CONSTRAINT "vehicle_stock_id_fkey" FOREIGN KEY ("stock_id") REFERENCES "stock"("stock_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
