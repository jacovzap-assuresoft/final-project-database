import { Router } from 'express'

import {
  createPayment,
  updatePayment,
  upsertPayment,
  getAllPayments,
  getPaymentById,
  getAllPaymentsDetails,
  getPaymentsByRange,
} from '../controllers/payment.controller.js'

const router = Router()

router.get('/', getAllPayments)
router.get('/id/:id', getPaymentById)
router.get('/details', getAllPaymentsDetails)
router.get('/range/:start/:end', getPaymentsByRange)
router.post('/', createPayment)
router.put('/:id', updatePayment)
router.put('/upsert/:id', upsertPayment)

export default router