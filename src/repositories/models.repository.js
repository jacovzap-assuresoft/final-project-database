import prisma from '../config/db.config.js'

const MODEL_SELECT = {
  name: true,
  brand_code: true,
  model_date: true,
  description: true,
  price: true
}

export const getAllModelsRepository = async () => {
  return prisma.model.findMany({
    select: MODEL_SELECT
  })
}

export const getSingleModelRepository = async id => {
  return prisma.model.findUnique({
    where: {
      model_id: id
    },
    select: MODEL_SELECT
  })
}

export const createModelRepository = async data => {
  return prisma.model.create({
    data,
    select: MODEL_SELECT
  })
}

export const updateModelRepository = async (id, data) => {
  return prisma.model.update({
    where: {
      model_id: id
    },
    data,
    select: MODEL_SELECT
  })
}

export const deleteModelRepository = async id => {
  return prisma.model.delete({
    where: {
      model_id: Number(id)
    },
    select: MODEL_SELECT
  })
}
