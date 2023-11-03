import prisma from '../config/db.config.js'

const RESERVE_SELECT = {
  currency_code: true,
  cost: true,
  customer_id: true,
  vehicle_id: true,
  payment_id: true
}

export const getAllReservesRepository = async () => {
  return prisma.reserve.findMany({
    select: RESERVE_SELECT
  })
}

export const getSingleReserveRepository = async id => {
  return prisma.reserve.findUnique({
    where: {
      reserve_id: id
    },
    select: RESERVE_SELECT
  })
}

export const createReserveRepository = async data => {
  return prisma.reserve.create({
    data,
    select: RESERVE_SELECT
  })
}

export const updateReserveRepository = async (id, data) => {
  return prisma.reserve.update({
    where: {
      reserve_id: id
    },
    data,
    select: RESERVE_SELECT
  })
}

export const deleteReserveRepository = async id => {
  return prisma.reserve.delete({
    where: {
      reserve_id: Number(id)
    },
    select: RESERVE_SELECT
  })
}
