import {
  createCatalogueRepository,
  deleteCatalogueRepository,
  getAllCatalogsRepository,
  getSingleCatalogueRepository,
  updateCatalogueRepository
} from '../repositories/catalogue.repository.js'

export const getAllCatalogs = async (request, response) => {
  try {
    const catalogues = await getAllCatalogsRepository()
    response.status(200).json(catalogues)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

export const getSingleCatalogue = async (request, response) => {
  try {
    const { id } = request.params
    const catalogue = await getSingleCatalogueRepository(Number(id))
    response.status(200).json(catalogue)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

export const createCatalogue = async (request, response) => {
  try {
    const data = request.body
    const catalogueCreated = await createCatalogueRepository(data)
    response.status(201).json(catalogueCreated)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

export const updateCatalogue = async (request, response) => {
  try {
    const { id } = request.params
    const data = request.body
    data.catalogue_id = Number(id)
    const catalogueUpdated = await updateCatalogueRepository({ data, id: Number(id) })
    response.status(201).json(catalogueUpdated)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

export const deleteCatalogue = async (request, response) => {
  try {
    const { id } = request.params
    const catalogueDeleted = await deleteCatalogueRepository(Number(id))
    response.status(200).json(catalogueDeleted)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}
