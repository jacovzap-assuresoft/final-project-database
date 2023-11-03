import { Router } from 'express'
import {
  getAllStocks,
  getSingleStock,
  createStock,
  updateStock,
  deleteStock
} from '../controllers/stock.controller.js'

const router = Router()

router.get('/', getAllStocks)
router.get('/:id', getSingleStock)
router.post('/create-stock', createStock)
router.put('/update-stock/:id', updateStock)
router.delete('/delete-stock/:id', deleteStock)

export default router
