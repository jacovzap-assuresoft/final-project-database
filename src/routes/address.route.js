import { Router } from 'express'

import { getAllAdresses } from '../controllers/address.controller.js'

const router = Router()

router.get('/', getAllAdresses)

export default router
