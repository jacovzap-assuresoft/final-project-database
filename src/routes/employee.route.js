import { Router } from 'express'
import {
  createEmployee,
  deleteEmployeeById,
  getAllEmployees,
  getEmployeeById,
  updateEmployee
} from '../controllers/employee.controller.js'

const employeeRouter = Router()

employeeRouter.get('/', getAllEmployees)
employeeRouter.get('/:id', getEmployeeById)
employeeRouter.post('/', createEmployee)
employeeRouter.put('/:id', updateEmployee)
employeeRouter.delete('/:id', deleteEmployeeById)

export default employeeRouter
