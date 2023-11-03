import { Router } from 'express'

import {
  createPaymentDetail,
  updatePaymentDetail,
  upsertPaymentDetail,
  getAllPaymentDetails,
  getPaymentDetailById,
  getPaymentDetailByAmountRange,
  deletePaymentDetail
} from '../controllers/payment_detail.controller.js'

const router = Router()

router.get('/', getAllPaymentDetails)
router.get('/id/:id', getPaymentDetailById)
router.get('/amount_range/:start/:end', getPaymentDetailByAmountRange)
router.post('/', createPaymentDetail)
router.put('/:id', updatePaymentDetail)
router.put('/upsert/:id', upsertPaymentDetail)
router.delete('/:id', deletePaymentDetail)

export default router
