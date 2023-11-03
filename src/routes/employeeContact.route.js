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
employeeContactRouter.post('/create-employee-contact', createEmployeeContact)
employeeContactRouter.put('/update-employee-contact/:id', updateEmployeeContact)
employeeContactRouter.delete('/delete-employee-contact/:id', deleteEmployeeContact)

export default employeeContactRouter
