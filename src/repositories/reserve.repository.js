import prisma from '../config/db.config.js'

export const getAllReservesRepository = async () => {
  return prisma.reserve.findMany({
    select: {
      currency_code: true,
      cost: true,
      customer_id: true,
      vehicle_id: true,
      payment_id: true
    }
  })
}

export const getSingleReserveRepository = async id => {
  return prisma.reserve.findUnique({
    where: {
      reserve_id: id
    },
    select: {
      currency_code: true,
      cost: true,
      customer_id: true,
      vehicle_id: true,
      payment_id: true
    }
  })
}

export const createReserveRepository = async data => {
  return prisma.reserve.create({
    data,
    select: {
      currency_code: true,
      cost: true,
      customer_id: true,
      vehicle_id: true,
      payment_id: true
    }
  })
}

export const updateReserveRepository = async (id, data) => {
  return prisma.reserve.update({
    where: {
      reserve_id: id
    },
    data,
    select: {
      currency_code: true,
      cost: true,
      customer_id: true,
      vehicle_id: true,
      payment_id: true
    }
  })
}

export const deleteReserveRepository = async id => {
  return prisma.reserve.delete({
    where: {
      reserve_id: Number(id)
    },
    select: {
      currency_code: true,
      cost: true,
      customer_id: true,
      vehicle_id: true,
      payment_id: true
    }
  })
}
