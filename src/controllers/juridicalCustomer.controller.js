import {
  createJuridicalCustomerRepository,
  deleteJuridicalCustomerRepository,
  getAllJuridicalCustomersRepository,
  getJuridicalCustomerRepository,
  updateJuridicalCustomerRepository
} from '../repositories/juridicalCustomer.repository.js'

export const getJuridicalCustomers = async (req, res) => {
  try {
    const juridicalCustomerId = req.params.id

    let customers
    if (juridicalCustomerId !== undefined) {
      customers = await getJuridicalCustomerRepository(Number(juridicalCustomerId))
    } else {
      customers = await getAllJuridicalCustomersRepository()
    }

    res.status(200).json(customers)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack
    })
  }
}

export const createJuridicalCustomer = async (req, res) => {
  try {
    const customerData = { address_id: req.body.address_id }
    delete req.body.address_id

    const juridicalCustomerData = req.body

    const newJuridicalCustomer = await createJuridicalCustomerRepository(customerData, juridicalCustomerData)
    res.status(200).json(newJuridicalCustomer)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack
    })
  }
}

export const updateJuridicalCustomer = async (req, res) => {
  try {
    const juridicalCustomerId = Number(req.params.id)
    const juridicalCustomerData = req.body

    const juridicalCustomer = await updateJuridicalCustomerRepository(juridicalCustomerId, juridicalCustomerData)
    res.status(200).json(juridicalCustomer)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack
    })
  }
}

export const deleteJuridicalCustomer = async (req, res) => {
  try {
    const juridicalCustomerId = Number(req.params.id)
    const customer = await deleteJuridicalCustomerRepository(juridicalCustomerId)

    res.status(200).json(customer)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack
    })
  }
}
