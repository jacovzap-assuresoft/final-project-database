import {
  createCustomerContactRepository,
  deleteCustomerContactRepository,
  getAllCustomerContactsRepository,
  getCustomerContactsRepository,
  updateCustomerContactRepository
} from '../repositories/customerContact.repository.js'

export const getAllCustomerContacts = async (req, res) => {
  try {
    const customerId = req.params.id
    let customerContacts
    if (customerId !== undefined) {
      customerContacts = await getCustomerContactsRepository(Number(customerId))
    } else {
      customerContacts = await getAllCustomerContactsRepository()
    }
    res.status(200).json(customerContacts)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack
    })
  }
}

export const createCustomerContact = async (req, res) => {
  try {
    const contactData = req.body
    const newContact = await createCustomerContactRepository(contactData)
    res.status(201).json(newContact)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack
    })
  }
}

export const updateCustomerContact = async (req, res) => {
  try {
    const contactId = Number(req.params.id)
    const contactData = req.body
    const updatedContact = await updateCustomerContactRepository(contactId, contactData)
    res.status(200).json(updatedContact)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack
    })
  }
}

export const deleteCustomerContact = async (req, res) => {
  try {
    const contactId = Number(req.params.id)
    const deletedContact = await deleteCustomerContactRepository(contactId)
    res.status(200).json(deletedContact)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack
    })
  }
}
