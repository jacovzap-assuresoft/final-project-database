import prisma from '../config/db.config.js'

const catalogueBody = {
  catalogue_id: true,
  type: true,
  code: true,
  description: true
}

export const getAllCataloguesQuery = async () => {
  return prisma.catalogue.findMany({
    select: catalogueBody
  })
}

export const getCatalogueByIdQuery = async id => {
  return prisma.catalogue.findUnique({
    where: {
      catalogue_id: id
    },
    select: catalogueBody
  })
}

export const createCatalogueUseCase = async data => {
  return prisma.catalogue.create({
    data,
    select: catalogueBody
  })
}

export const updateCatalogueUseCase = async ({ data, id }) => {
  return prisma.catalogue.update({
    where: {
      catalogue_id: id
    },
    data,
    select: catalogueBody
  })
}

export const deleteCatalogueByIdUseCase = async id => {
  return prisma.catalogue.delete({
    where: {
      catalogue_id: id
    },
    select: catalogueBody
  })
}
