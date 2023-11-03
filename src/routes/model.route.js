import { Router } from 'express'

import {
  getAllModels,
  getSingleModel,
  createModel,
  updateModel,
  deleteModel
} from '../controllers/models.controller.js'

const router = Router()

router.get('/', getAllModels)
router.get('/:id', getSingleModel)
router.post('/create-model', createModel)
router.put('/update-model/:id', updateModel)
router.delete('/delete-model/:id', deleteModel)

export default router
