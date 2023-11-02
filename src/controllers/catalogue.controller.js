import {
  createCatalogueUseCase, 
  deleteCatalogueByIdUseCase, 
  getAllCataloguesQuery,
  getCatalogueByIdQuery, 
  updateCatalogueUseCase
} from '../repositories/catalogue.repository.js'

export const getAllCatalogues = async (request, response) => {
  try {
    const catalogues = await getAllCataloguesQuery()
    response.status(200).json(catalogues)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

export const getCatalogueById = async (request, response) => {
  try {
    const { id } = request.params
    const catalogue = await getCatalogueByIdQuery(Number(id))
    response.status(200).json(catalogue)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

export const createCatalogue = async (request, response) => {
  try {
    const data = request.body
    const catalogueCreated = await createCatalogueUseCase(data)
    response.status(201).json(catalogueCreated)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

export const updateCatalogue = async (request, response) => {
  try {
    const { id } = request.params
    const data = request.body
    data.catalogue_id = Number(id);
    const catalogueCreated = await updateCatalogueUseCase({ data, id: Number(id) })
    response.status(201).json(catalogueCreated)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

export const deleteCatalogueById = async (request, response) => {
  try {
    const { id } = request.params
    console.log(id);
    const catalogue = await deleteCatalogueByIdUseCase(Number(id))
    response.status(200).json(catalogue)
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

