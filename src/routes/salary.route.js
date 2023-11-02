import { Router } from 'express'
import { 
  createSalary,
  deleteSalaryById,
  getAllSalaries, 
  getSalaryById, 
  updateSalary
} from '../controllers/salary.controller.js'

const salaryRouter = Router()

salaryRouter.get('/', getAllSalaries)
salaryRouter.get('/:id', getSalaryById)
salaryRouter.post('/', createSalary)
salaryRouter.put('/:id', updateSalary)
salaryRouter.delete('/:id', deleteSalaryById)

export default salaryRouter