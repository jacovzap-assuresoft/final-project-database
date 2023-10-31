import { Router } from "express"

import { getAllAdresses } from "../controllers/address.controller.js"

const router = Router()

router.get('/address', getAllAdresses)

export default router