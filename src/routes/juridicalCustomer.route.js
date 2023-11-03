import { Router } from 'express'

import {
  createJuridicalCustomer,
  deleteJuridicalCustomer,
  getJuridicalCustomers,
  updateJuridicalCustomer
} from '../controllers/juridicalCustomer.controller.js'

const router = Router()

router.get('/:id?', getJuridicalCustomers)
router.post('/create-customer', createJuridicalCustomer)
router.put('/update-customer/:id', updateJuridicalCustomer)
router.delete('/delete-customer/:id', deleteJuridicalCustomer)

export default router
