import prisma from '../config/db.config.js'

const STORE_SELECT = {
  phone: true,
  address: {
    select: {
      address_id: true,
      address_dir: true,
      location: true,
      number: true
    }
  }
}

export const getAllStoresRepository = async () => {
  return prisma.store.findMany({
    select: STORE_SELECT
  })
}

export const getSingleStoreRepository = async id => {
  return prisma.store.findUnique({
    where: {
      store_id: id
    },
    select: STORE_SELECT
  })
}

export const createStoreRepository = async data => {
  return prisma.store.create({
    data,
    select: STORE_SELECT
  })
}

export const updateStoreRepository = async (id, data) => {
  return prisma.store.update({
    where: {
      store_id: id
    },
    data,
    select: STORE_SELECT
  })
}

export const deleteStoreRepository = async id => {
  return prisma.store.delete({
    where: {
      store_id: Number(id)
    },
    select: STORE_SELECT
  })
}
