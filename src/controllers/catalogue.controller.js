import {
  createCatalogueRepository,
  deleteCatalogueRepository,
  getAllCatalogsRepository,
  getSingleCatalogueRepository,
  updateCatalogueRepository
} from '../repositories/catalogue.repository.js'

export const getAllCatalogs = async (req, res) => {
  try {
    const catalogues = await getAllCatalogsRepository()
    res.status(200).json(catalogues)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getSingleCatalogue = async (req, res) => {
  try {
    const { id } = req.params
    const catalogue = await getSingleCatalogueRepository(Number(id))
    res.status(200).json(catalogue)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createCatalogue = async (req, res) => {
  try {
    const data = req.body
    const catalogueCreated = await createCatalogueRepository(data)
    res.status(201).json(catalogueCreated)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateCatalogue = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    data.catalogue_id = Number(id)
    const catalogueUpdated = await updateCatalogueRepository(data, Number(id))
    res.status(201).json(catalogueUpdated)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteCatalogue = async (req, res) => {
  try {
    const { id } = req.params
    const catalogueDeleted = await deleteCatalogueRepository(Number(id))
    res.status(200).json(catalogueDeleted)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
