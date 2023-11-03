import {
  createEmployeeRepository,
  deleteEmployeeRepository,
  getAllEmployeesRepository,
  getSingleEmployeeRepository,
  updateEmployeeRepository
} from '../repositories/employee.repository.js'

export const getAllEmployees = async (req, res) => {
  try {
    const employees = await getAllEmployeesRepository()
    res.status(200).json(employees)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params
    const employee = await getSingleEmployeeRepository(Number(id))
    res.status(200).json(employee)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createEmployee = async (req, res) => {
  try {
    const data = req.body
    data.birth_date = new Date(data.birth_date).toISOString()
    const employeeCreated = await createEmployeeRepository(data)
    res.status(201).json(employeeCreated)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    data.employee_id = Number(id)
    const employeeUpdated = await updateEmployeeRepository({ data, id: Number(id) })
    res.status(201).json(employeeUpdated)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params
    const employeeDeleted = await deleteEmployeeRepository(Number(id))
    res.status(200).json(employeeDeleted)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
