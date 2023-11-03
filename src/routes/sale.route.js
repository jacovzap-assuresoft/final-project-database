import { Router } from "express";

import {
  getAllSales,
  getAllSalesDetails,
  getSaleById,
  getSalesEmployee,
  createSale,
  updateSale,
  upsertSale,
  deleteSale
} from "../controllers/sale.controller.js";

const router = Router();

router.get("/", getAllSales);
router.get("/id/:id", getSaleById);
router.get("/details", getAllSalesDetails);
router.get("/employee/:employee_id", getSalesEmployee);
router.post("/", createSale);
router.put("/:id", updateSale);
router.put("/upsert/:id", upsertSale);
router.delete("/id/:id", deleteSale);

export default router;