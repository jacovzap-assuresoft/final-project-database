import { getAllAdressesRepository } from '../repositories/address.repository.js'

export const getAllAdresses = async (req, res) => {
  try {
    const addresses = await getAllAdressesRepository()
    res.status(200).json(addresses)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}
