import { Router } from 'express'

import {
  createCustomerContact,
  deleteCustomerContact,
  getAllCustomerContacts,
  updateCustomerContact
} from '../controllers/customerContact.controller.js'

const router = Router()

router.get('/:id?', getAllCustomerContacts)
router.post('/create-contact', createCustomerContact)
router.put('/update-contact/:id', updateCustomerContact)
router.delete('/delete-contact/:id', deleteCustomerContact)

export default router
