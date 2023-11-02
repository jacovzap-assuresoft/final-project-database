import { Router } from 'express'
import { 
  createCatalogue, 
  deleteCatalogueById, 
  getAllCatalogues, 
  getCatalogueById, 
  updateCatalogue
} from '../controllers/catalogue.controller.js'

const catalogueRouter = Router()

catalogueRouter.get('/', getAllCatalogues)
catalogueRouter.get('/:id', getCatalogueById)
catalogueRouter.post('/', createCatalogue)
catalogueRouter.put('/:id', updateCatalogue)
catalogueRouter.delete('/:id', deleteCatalogueById)

export default catalogueRouter
