import { Router } from 'express'
import {
  createEmployeeContact,
  deleteEmployeeContactById,
  getAllEmployeeContacts,
  getEmployeeContactById,
  updateEmployeeContact
} from '../controllers/employeeContact.controller.js'

const employeeContactRouter = Router()

employeeContactRouter.get('/', getAllEmployeeContacts)
employeeContactRouter.get('/:id', getEmployeeContactById)
employeeContactRouter.post('/', createEmployeeContact)
employeeContactRouter.put('/:id', updateEmployeeContact)
employeeContactRouter.delete('/:id', deleteEmployeeContactById)

export default employeeContactRouter
