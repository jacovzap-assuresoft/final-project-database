import { Router } from 'express'
import {
  createSalary,
  deleteSalary,
  getAllSalaries,
  getSingleSalary,
  updateSalary
} from '../controllers/salary.controller.js'

const salaryRouter = Router()

salaryRouter.get('/', getAllSalaries)
salaryRouter.get('/:id', getSingleSalary)
salaryRouter.post('/create-salary', createSalary)
salaryRouter.put('/update-salary/:id', updateSalary)
salaryRouter.delete('/delete-salary/:id', deleteSalary)

export default salaryRouter
