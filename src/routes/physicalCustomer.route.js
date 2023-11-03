import { Router } from 'express'

import {
  createPhysicalCustomer,
  deletePhysicalCustomer,
  getPhysicalCustomers,
  updatePhysicalCustomer
} from '../controllers/physicalCustomer.controller.js'

const router = Router()

router.get('/:id?', getPhysicalCustomers)
router.post('/create-customer', createPhysicalCustomer)
router.put('/update-customer/:id', updatePhysicalCustomer)
router.delete('/delete-customer/:id', deletePhysicalCustomer)

export default router
