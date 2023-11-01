import {
  getAllStockRepository,
  getSingleStockRepository,
  createStockRepository,
  updateStockRepository,
  deleteStoreRepository
} from '../repositories/stock.repository.js'

export const getAllStocks = async (req, res) => {
  try {
    const stores = await getAllStockRepository()
    res.status(200).json(stores)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const getSingleStock = async (req, res) => {
  try {
    const { id } = req.params
    const store = await getSingleStockRepository(Number(id))
    res.status(200).json(store)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const createStock = async (req, res) => {
  try {
    const data = req.body
    const newStore = await createStockRepository(data)
    res.status(201).json(newStore)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const updateStock = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const store = await updateStockRepository(Number(id), data)
    res.status(200).json(store)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const deleteStock = async (req, res) => {
  try {
    const { id } = req.params
    const store = await deleteStoreRepository(Number(id))
    res.status(200).json(store)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}
