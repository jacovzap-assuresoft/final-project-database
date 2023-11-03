import { Router } from 'express'
import {
  createEmployeeContact,
  deleteEmployeeContact,
  getAllEmployeeContacts,
  getSingleEmployeeContact,
  updateEmployeeContact
} from '../controllers/employeeContact.controller.js'

const employeeContactRouter = Router()

employeeContactRouter.get('/', getAllEmployeeContacts)
employeeContactRouter.get('/:id', getSingleEmployeeContact)
employeeContactRouter.post('/', createEmployeeContact)
employeeContactRouter.put('/:id', updateEmployeeContact)
employeeContactRouter.delete('/:id', deleteEmployeeContact)

export default employeeContactRouter
