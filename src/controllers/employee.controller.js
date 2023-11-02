import {
  createEmployeeUseCase,
  deleteEmployeeByIdUseCase,
  getAllEmployeesQuery,
  getEmployeeByIdQuery,
  updateEmployeeUseCase
} from '../repositories/employee.repository.js'

export const getAllEmployees = async (request, response) => {
  try {
    const employees = await getAllEmployeesQuery()
    response.status(200).json(employees)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

export const getEmployeeById = async (request, response) => {
  try {
    const { id } = request.params
    const employee = await getEmployeeByIdQuery(Number(id))
    response.status(200).json(employee)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

export const createEmployee = async (request, response) => {
  try {
    const data = request.body
    const employeeCreated = await createEmployeeUseCase(data)
    response.status(201).json(employeeCreated)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

export const updateEmployee = async (request, response) => {
  try {
    const { id } = request.params
    const data = request.body
    data.employee_id = Number(id)
    const employeeUpdated = await updateEmployeeUseCase({ data, id: Number(id) })
    response.status(201).json(employeeUpdated)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

export const deleteEmployeeById = async (request, response) => {
  try {
    const { id } = request.params
    const employeeDeleted = await deleteEmployeeByIdUseCase(Number(id))
    response.status(200).json(employeeDeleted)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}
