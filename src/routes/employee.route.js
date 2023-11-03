import { Router } from 'express'
import {
  createEmployee,
  deleteEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee
} from '../controllers/employee.controller.js'

const employeeRouter = Router()

employeeRouter.get('/', getAllEmployees)
employeeRouter.get('/:id', getEmployeeById)
employeeRouter.post('/create-employee', createEmployee)
employeeRouter.put('/update-employee/:id', updateEmployee)
employeeRouter.delete('/delete-employee/:id', deleteEmployee)

export default employeeRouter
