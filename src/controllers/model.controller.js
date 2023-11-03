import {
  getAllModelsRepository,
  getSingleModelRepository,
  createModelRepository,
  updateModelRepository,
  deleteModelRepository
} from '../repositories/model.repository.js'

export const getAllModels = async (req, res) => {
  try {
    const models = await getAllModelsRepository()
    res.status(200).json(models)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const getSingleModel = async (req, res) => {
  try {
    const { id } = req.params
    const model = await getSingleModelRepository(Number(id))
    res.status(200).json(model)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const createModel = async (req, res) => {
  try {
    const data = req.body
    const newModel = await createModelRepository(data)
    res.status(201).json(newModel)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const updateModel = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const model = await updateModelRepository(Number(id), data)
    res.status(200).json(model)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}

export const deleteModel = async (req, res) => {
  try {
    const { id } = req.params
    const model = await deleteModelRepository(Number(id))
    res.status(200).json(model)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: err.message })
  }
}
