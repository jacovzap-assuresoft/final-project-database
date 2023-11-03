import prisma from "../config/db.config.js";

const PAYMENT_DETAIL_SELECT = {
  payment_detail_id: true,
  description: true,
  type_code: true,
  currency_code: true,
  amount: true,
  receipt_code: true
}

export const createPaymentDetailRepository = async (payment) => {
  return prisma.payment_detail.create({
    data: payment,
    select: PAYMENT_DETAIL_SELECT
  })
}

export const getAllPaymentDetailsRepository = async () => {
  return prisma.payment_detail.findMany({
    select: PAYMENT_DETAIL_SELECT
  })
}

export const getPaymentDetailByIdRepository = async (id) => {
  return prisma.payment_detail.findUnique({
    where: {
      payment_detail_id: Number(id)
    },
    select: PAYMENT_DETAIL_SELECT
  })
}

export const updatePaymentDetailRepository = async (id, payment) => {
  return prisma.payment_detail.update({
    where: {
      payment_detail_id: Number(id)
    },
    data: payment,
    select: PAYMENT_DETAIL_SELECT
  })
}

export const upsertPaymentDetailRepository = async (id, payment) => {
  return prisma.payment_detail.upsert({
    where: {
      payment_detail_id: Number(id)
    },
    update: payment,
    create: payment,
    select: PAYMENT_DETAIL_SELECT
  })
}

export const deletePaymentDetailRepository = async (id) => {
  return prisma.payment_detail.delete({
    where: {
      payment_detail_id: Number(id)
    },
    select: PAYMENT_DETAIL_SELECT
  })
}

export const getPaymentDatailByAmountRange = async (min, max) => {
  return prisma.payment_detail.findMany({
    where: {
      amount: {
        gte: Number(min),
        lte: Number(max)
      }
    },
    select: PAYMENT_DETAIL_SELECT
  })
}