import {
  getAllReservesRepository,
  getSingleReserveRepository,
  createReserveRepository,
  updateReserveRepository,
  deleteReserveRepository
} from '../repositories/reserve.repository.js'

export const getAllReserves = async (req, res) => {
  try {
    const addresses = await getAllReservesRepository()
    res.status(200).json(addresses)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const getSingleReserve = async (req, res) => {
  try {
    const { id } = req.params
    const reserve = await getSingleReserveRepository(Number(id))
    res.status(200).json(reserve)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const createReserve = async (req, res) => {
  try {
    const data = req.body
    const newReserve = await createReserveRepository(data)
    res.status(201).json(newReserve)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const updateReserve = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const reserve = await updateReserveRepository(Number(id), data)
    res.status(200).json(reserve)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const deleteReserve = async (req, res) => {
  try {
    const { id } = req.params
    const reserve = await deleteReserveRepository(Number(id))
    res.status(200).json(reserve)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}
