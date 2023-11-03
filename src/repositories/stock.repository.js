import prisma from '../config/db.config.js'

const STOCK_SELECT = {
  name: true,
  phone: true,
  address: {
    select: {
      address_id: true,
      address_dir: true,
      location: true,
      number: true
    }
  },
  store: {
    select: {
      store_id: true,
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
  }
}

export const getAllStockRepository = async () => {
  return prisma.stock.findMany({
    select: STOCK_SELECT
  })
}

export const getSingleStockRepository = async id => {
  return prisma.stock.findUnique({
    where: {
      stock_id: id
    },
    select: STOCK_SELECT
  })
}

export const createStockRepository = async data => {
  return prisma.stock.create({
    data,
    select: STOCK_SELECT
  })
}

export const updateStockRepository = async (id, data) => {
  return prisma.stock.update({
    where: {
      stock_id: id
    },
    data,
    select: STOCK_SELECT
  })
}

export const deleteStoreRepository = async id => {
  return prisma.stock.delete({
    where: {
      stock_id: Number(id)
    },
    select: STOCK_SELECT
  })
}
