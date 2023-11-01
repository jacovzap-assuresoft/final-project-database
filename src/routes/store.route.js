import { Router } from 'express'
import {
  getAllStores,
  getSingleStore,
  createStore,
  updateStore,
  deleteStore
} from '../controllers/store.controller.js'

const router = Router()

router.get('/', getAllStores)
router.get('/:id', getSingleStore)
router.post('/create-store', createStore)
router.put('/update-store/:id', updateStore)
router.delete('/delete-store/:id', deleteStore)

export default router
