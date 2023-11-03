import {
  getAllAddressesRepository,
  getAddressRepository,
  updateAddressRepository,
  deleteAddressRepository,
  createAddressRepository
} from '../repositories/address.repository.js'

export const getAllAdresses = async (req, res) => {
  try {
    const addresses = await getAllAddressesRepository()
    res.status(200).json(addresses)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack
    })
  }
}

export const getAddress = async (req, res) => {
  try {
    const addressId = req.params.id
    const address = await getAddressRepository(Number(addressId))
    res.status(200).json(address)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack
    })
  }
}

export const createAddress = async (req, res) => {
  try {
    const addressData = req.body
    const address = await createAddressRepository(addressData)
    res.status(200).json(address)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack
    })
  }
}

export const updateAddress = async (req, res) => {
  try {
    const addressId = req.params.id
    const addressData = req.body
    const address = await updateAddressRepository(Number(addressId), addressData)
    res.status(200).json(address)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack
    })
  }
}

export const deleteAddress = async (req, res) => {
  try {
    const addressId = req.params.id
    const address = await deleteAddressRepository(Number(addressId))
    res.status(200).json(address)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack
    })
  }
}
