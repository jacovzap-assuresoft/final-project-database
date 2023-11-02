import {
  getAllVehiclesRepository,
  getSingleVehicleRepository,
  createVehicleRepository,
  updateVehicleRepository,
  deleteVehicleRepository
} from '../repositories/vehicle.repository.js'

export const getAllVehicles = async (req, res) => {
  try {
    const addresses = await getAllVehiclesRepository()
    res.status(200).json(addresses)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const getSingleVehicle = async (req, res) => {
  try {
    const { id } = req.params
    const vehicle = await getSingleVehicleRepository(Number(id))
    res.status(200).json(vehicle)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const createVehicle = async (req, res) => {
  try {
    const data = req.body
    const newVehicle = await createVehicleRepository(data)
    res.status(201).json(newVehicle)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const updateVehicle = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const vehicle = await updateVehicleRepository(Number(id), data)
    res.status(200).json(vehicle)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params
    const vehicle = await deleteVehicleRepository(Number(id))
    res.status(200).json(vehicle)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}
