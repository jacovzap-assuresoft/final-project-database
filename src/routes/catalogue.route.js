import { Router } from 'express'
import {
  createCatalogue,
  deleteCatalogue,
  getAllCatalogs,
  getSingleCatalogue,
  updateCatalogue
} from '../controllers/catalogue.controller.js'

const catalogueRouter = Router()

catalogueRouter.get('/', getAllCatalogs)
catalogueRouter.get('/:id', getSingleCatalogue)
catalogueRouter.post('/create-catalogue', createCatalogue)
catalogueRouter.put('/update-catalogue/:id', updateCatalogue)
catalogueRouter.delete('/delete-catalogue/:id', deleteCatalogue)

export default catalogueRouter
