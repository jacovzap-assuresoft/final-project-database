import {
  getAllStockRepository,
  getSingleStockRepository,
  createStockRepository,
  updateStockRepository,
  deleteStoreRepository
} from '../repositories/stock.repository.js'

export const getAllStocks = async (req, res) => {
  try {
    const stocks = await getAllStockRepository()
    res.status(200).json(stocks)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const getSingleStock = async (req, res) => {
  try {
    const { id } = req.params
    const stock = await getSingleStockRepository(Number(id))
    res.status(200).json(stock)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const createStock = async (req, res) => {
  try {
    const data = req.body
    const newStock = await createStockRepository(data)
    res.status(201).json(newStock)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const updateStock = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const stock = await updateStockRepository(Number(id), data)
    res.status(200).json(stock)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const deleteStock = async (req, res) => {
  try {
    const { id } = req.params
    const stock = await deleteStoreRepository(Number(id))
    res.status(200).json(stock)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}
