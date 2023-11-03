import prisma from '../config/db.config.js'

const catalogueBody = {
  catalogue_id: true,
  type: true,
  code: true,
  description: true
}

export const getAllCatalogsRepository = async () => {
  return prisma.catalogue.findMany({
    select: catalogueBody
  })
}

export const getSingleCatalogueRepository = async id => {
  return prisma.catalogue.findUnique({
    where: {
      catalogue_id: id
    },
    select: catalogueBody
  })
}

export const createCatalogueRepository = async data => {
  return prisma.catalogue.create({
    data,
    select: catalogueBody
  })
}

export const updateCatalogueRepository = async (data, id) => {
  return prisma.catalogue.update({
    where: {
      catalogue_id: id
    },
    data,
    select: catalogueBody
  })
}

export const deleteCatalogueRepository = async id => {
  return prisma.catalogue.delete({
    where: {
      catalogue_id: id
    },
    select: catalogueBody
  })
}
