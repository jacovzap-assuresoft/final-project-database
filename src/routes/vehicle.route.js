import { Router } from 'express'

import {
  getAllVehicles,
  getSingleVehicle,
  createVehicle,
  updateVehicle,
  deleteVehicle
} from '../controllers/vehicle.controller.js'

const router = Router()

router.get('/', getAllVehicles)
router.get('/:id', getSingleVehicle)
router.post('/create-vehicle', createVehicle)
router.put('/update-vehicle/:id', updateVehicle)
router.delete('/delete-vehicle/:id', deleteVehicle)

export default router
