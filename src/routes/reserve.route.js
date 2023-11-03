import { Router } from 'express'

import {
  getAllReserves,
  getSingleReserve,
  createReserve,
  updateReserve,
  deleteReserve
} from '../controllers/reserve.controller.js'

const router = Router()

router.get('/', getAllReserves)
router.get('/:id', getSingleReserve)
router.post('/create-reserve', createReserve)
router.put('/update-reserve/:id', updateReserve)
router.delete('/delete-reserve/:id', deleteReserve)

export default router
