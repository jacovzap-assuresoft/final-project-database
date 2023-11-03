import { Router } from 'express'

import {
  getAllCommissions,
  getSingleCommision,
  createCommission,
  updateCommission,
  deleteCommission
} from '../controllers/commission.controller.js'

const router = Router()

router.get('/', getAllCommissions)
router.get('/:id', getSingleCommision)
router.post('/create-commission', createCommission)
router.put('/update-commission/:id', updateCommission)
router.delete('/delete-commission/:id', deleteCommission)

export default router
