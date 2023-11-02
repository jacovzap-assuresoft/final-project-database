import prisma from '../config/db.config.js'

export const getAllModelsRepository = async () => {
  return prisma.model.findMany({
    select: {
      model_id: true,
      name: true,
      brand_code: true,
      model_date: true,
      description: true,
      price: true
    }
  })
}

export const getSingleModelRepository = async id => {
  return prisma.model.findUnique({
    where: {
      model_id: id
    },
    select: {
      model_id: true,
      name: true,
      brand_code: true,
      model_date: true,
      description: true,
      price: true
    }
  })
}

export const createModelRepository = async data => {
  return prisma.model.create({
    data,
    select: {
      model_id: true,
      name: true,
      brand_code: true,
      model_date: true,
      description: true,
      price: true
    }
  })
}

export const updateModelRepository = async (id, data) => {
  return prisma.model.update({
    where: {
      model_id: id
    },
    data,
    select: {
      model_id: true,
      name: true,
      brand_code: true,
      model_date: true,
      description: true,
      price: true
    }
  })
}

export const deleteModelRepository = async id => {
  return prisma.model.delete({
    where: {
      model_id: Number(id)
    },
    select: {
      model_id: true,
      name: true,
      brand_code: true,
      model_date: true,
      description: true,
      price: true
    }
  })
}
