import {
  createPhysicalCustomerRepository,
  deletePhysicalCustomerRepository,
  getAllPhysicalCustomers,
  getPhysicalCustomer,
  updatePhysicalCustomerRepository
} from '../repositories/physicalCustomer.repository.js'

export const getPhysicalCustomers = async (req, res) => {
  try {
    const physicalCustomerId = req.params.id

    let customers
    if (physicalCustomerId !== undefined) {
      customers = await getPhysicalCustomer(Number(physicalCustomerId))
    } else {
      customers = await getAllPhysicalCustomers()
    }

    res.status(200).json(customers)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack
    })
  }
}

export const createPhysicalCustomer = async (req, res) => {
  try {
    const customerData = { address_id: req.body.address_id }
    delete req.body.address_id

    const physicalCustomerData = req.body
    physicalCustomerData.birth_date = new Date(physicalCustomerData.birth_date).toISOString()

    const newPhysicalCustomer = await createPhysicalCustomerRepository(customerData, physicalCustomerData)
    res.status(200).json(newPhysicalCustomer)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack
    })
  }
}

export const updatePhysicalCustomer = async (req, res) => {
  try {
    const physicalCustomerId = Number(req.params.id)
    const physicalCustomerData = req.body

    physicalCustomerData.birth_date = new Date(physicalCustomerData.birth_date).toISOString()

    const physicalCustomer = await updatePhysicalCustomerRepository(physicalCustomerId, physicalCustomerData)
    res.status(200).json(physicalCustomer)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack
    })
  }
}

export const deletePhysicalCustomer = async (req, res) => {
  try {
    const physicalCustomerId = Number(req.params.id)
    const customer = await deletePhysicalCustomerRepository(physicalCustomerId)

    res.status(200).json(customer)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack
    })
  }
}
