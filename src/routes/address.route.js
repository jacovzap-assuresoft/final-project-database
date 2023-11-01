import { Router } from 'express'

import { createAddress, deleteAddress, getAddress, getAllAdresses, updateAddress } from '../controllers/address.controller.js'

const router = Router()

router.get('/', getAllAdresses)
router.get('/:id', getAddress)
router.post('/create-address', createAddress)
router.put('/update-address/:id', updateAddress)
router.delete('/delete-address/:id', deleteAddress)

export default router
