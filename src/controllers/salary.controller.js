import {
  createSalaryRepository,
  deleteSalaryRepository,
  getAllSalariesRepository,
  getSingleSalaryRepository,
  updateSalaryRepository
} from '../repositories/salary.repository.js'

export const getAllSalaries = async (req, res) => {
  try {
    const salaries = await getAllSalariesRepository()
    res.status(200).json(salaries)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getSingleSalary = async (req, res) => {
  try {
    const { id } = req.params
    const salary = await getSingleSalaryRepository(Number(id))
    res.status(200).json(salary)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createSalary = async (req, res) => {
  try {
    const data = req.body
    const salaryCreated = await createSalaryRepository(data)
    res.status(201).json(salaryCreated)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateSalary = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    data.salary_id = Number(id)
    const salaryUpdated = await updateSalaryRepository({ data, id: Number(id) })
    res.status(201).json(salaryUpdated)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteSalary = async (req, res) => {
  try {
    const { id } = req.params
    const salaryDeleted = await deleteSalaryRepository(Number(id))
    res.status(200).json(salaryDeleted)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
