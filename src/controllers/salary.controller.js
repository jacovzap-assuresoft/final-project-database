import { 
  createSalaryUseCase,
  deleteSalaryByIdUseCase,
  getAllSalariesQuery, 
  getSalaryByIdQuery,
  updateSalaryUseCase
} from '../repositories/salary.repository.js'

export const getAllSalaries = async (request, response) => {
  try {
    const salaries = await getAllSalariesQuery()
    response.status(200).json(salaries)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

export const getSalaryById = async (request, response) => {
  try {
    const { id } = request.params
    const salary = await getSalaryByIdQuery(Number(id))
    response.status(200).json(salary)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

export const createSalary = async (request, response) => {
  try {
    const data = request.body
    const salaryCreated = await createSalaryUseCase(data)
    response.status(201).json(salaryCreated)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

export const updateSalary = async (request, response) => {
  try {
    const { id } = request.params
    const data = request.body
    data.salary_id = Number(id)
    const salaryUpdated = await updateSalaryUseCase({ data, id: Number(id) })
    response.status(201).json(salaryUpdated)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

export const deleteSalaryById = async (request, response) => {
  try {
    const { id } = request.params
    const salaryDeleted = await deleteSalaryByIdUseCase(Number(id))
    response.status(200).json(salaryDeleted)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}