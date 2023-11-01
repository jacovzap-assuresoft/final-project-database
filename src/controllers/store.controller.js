import {
  getAllStoresRepository,
  getSingleStoreRepository,
  createStoreRepository,
  updateStoreRepository,
  deleteStoreRepository
} from '../repositories/store.repository.js'

export const getAllStores = async (req, res) => {
  try {
    const stores = await getAllStoresRepository()
    res.status(200).json(stores)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const getSingleStore = async (req, res) => {
    try {
        const { id } = req.params
        const store = await getSingleStoreRepository(Number(id))
        res.status(200).json(store)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: err.message })
    }
}

export const createStore = async (req, res) => {
  try {
    const data = req.body
    const newStore = await createStoreRepository(data)
    res.status(201).json(newStore)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const updateStore = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const store = await updateStoreRepository(Number(id), data)
    res.status(200).json(store)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const deleteStore = async (req, res) => {
  try {
    const { id } = req.params
    const store = await deleteStoreRepository(Number(id))
    res.status(200).json(store)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}
