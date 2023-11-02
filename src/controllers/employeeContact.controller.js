import {
  createEmployeeContactUseCase,
  deleteEmployeeContactByIdUseCase,
  getAllEmployeeContactsQuery,
  getEmployeeContactByIdQuery,
  updateEmployeeContactUseCase
} from '../repositories/employeeContact.repository.js'

export const getAllEmployeeContacts = async (request, response) => {
  try {
    const employeeContacts = await getAllEmployeeContactsQuery()
    response.status(200).json(employeeContacts)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

export const getEmployeeContactById = async (request, response) => {
  try {
    const { id } = request.params
    const employeeContact = await getEmployeeContactByIdQuery(Number(id))
    response.status(200).json(employeeContact)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

export const createEmployeeContact = async (request, response) => {
  try {
    const data = request.body
    const employeeContactCreated = await createEmployeeContactUseCase(data)
    response.status(201).json(employeeContactCreated)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

export const updateEmployeeContact = async (request, response) => {
  try {
    const { id } = request.params
    const data = request.body
    data.contact_id = Number(id)
    const employeeContactUpdated = await updateEmployeeContactUseCase({ data, id: Number(id) })
    response.status(201).json(employeeContactUpdated)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

export const deleteEmployeeContactById = async (request, response) => {
  try {
    const { id } = request.params
    const employeeContactDeleted = await deleteEmployeeContactByIdUseCase(Number(id))
    response.status(200).json(employeeContactDeleted)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}
