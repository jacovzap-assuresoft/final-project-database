import {
  getAllCommissionsRepository,
  getSingleComissionRepository,
  createCommissionRepository,
  updateCommissionRepository,
  deleteCommissionRepository
} from '../repositories/commission.repository.js'

export const getAllCommissions = async (req, res) => {
  try {
    const commissions = await getAllCommissionsRepository()
    res.status(200).json(commissions)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const getSingleCommision = async (req, res) => {
  try {
    const { id } = req.params
    const commission = await getSingleComissionRepository(Number(id))
    res.status(200).json(commission)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const createCommission = async (req, res) => {
  try {
    const data = req.body
    const newCommission = await createCommissionRepository(data)
    res.status(201).json(newCommission)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const updateCommission = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const commission = await updateCommissionRepository(Number(id), data)
    res.status(200).json(commission)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const deleteCommission = async (req, res) => {
  try {
    const { id } = req.params
    const commission = await deleteCommissionRepository(Number(id))
    res.status(200).json(commission)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}
