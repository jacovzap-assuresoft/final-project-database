import {
  createEmployeeContactRepository,
  deleteEmployeeContactRepository,
  getAllEmployeeContactsRepository,
  getSingleEmployeeContactRepository,
  updateEmployeeContactRepository
} from '../repositories/employeeContact.repository.js'

export const getAllEmployeeContacts = async (req, res) => {
  try {
    const employeeContacts = await getAllEmployeeContactsRepository()
    res.status(200).json(employeeContacts)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getSingleEmployeeContact = async (req, res) => {
  try {
    const { id } = req.params
    const employeeContact = await getSingleEmployeeContactRepository(Number(id))
    res.status(200).json(employeeContact)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createEmployeeContact = async (req, res) => {
  try {
    const data = req.body
    const employeeContactCreated = await createEmployeeContactRepository(data)
    res.status(201).json(employeeContactCreated)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateEmployeeContact = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    data.contact_id = Number(id)
    const employeeContactUpdated = await updateEmployeeContactRepository(data, Number(id))
    res.status(201).json(employeeContactUpdated)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteEmployeeContact = async (req, res) => {
  try {
    const { id } = req.params
    const employeeContactDeleted = await deleteEmployeeContactRepository(Number(id))
    res.status(200).json(employeeContactDeleted)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
