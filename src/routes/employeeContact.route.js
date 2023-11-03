import { Router } from 'express'
import {
  createEmployeeContact,
  deleteEmployeeContactById,
  getAllEmployeeContacts,
  getEmployeeContactById,
  getSingleEmployeeContact,
  updateEmployeeContact
} from '../controllers/employeeContact.controller.js'

const employeeContactRouter = Router()

employeeContactRouter.get('/', getAllEmployeeContacts)
employeeContactRouter.get('/:id', getSingleEmployeeContact)
employeeContactRouter.post('/', createEmployeeContact)
employeeContactRouter.put('/:id', updateEmployeeContact)
employeeContactRouter.delete('/:id', deleteEmployeeContactById)

export default employeeContactRouter
