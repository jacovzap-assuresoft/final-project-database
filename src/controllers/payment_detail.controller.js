import {
  createPaymentDetailRepository,
  getAllPaymentDetailsRepository,
  getPaymentDetailByIdRepository,
  updatePaymentDetailRepository,
  upsertPaymentDetailRepository,
  deletePaymentDetailRepository,
  getPaymentDatailByAmountRange
} from '../repositories/payment_detail.repository.js';

export const createPaymentDetail = async (req, res) => {
  try {
    const data = await createPaymentDetailRepository(payment)
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack,
    })
  }
}

export const updatePaymentDetail = async (req, res) => {
  try {
    const { id } = req.params
    const payment_detail = await updatePaymentDetailRepository(id, req.body)
    res.status(200).json(payment_detail)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack,
    })
  }
}

export const upsertPaymentDetail = async (req, res) => {
  try {
    const { id } = req.params
    const payment_detail = await upsertPaymentDetailRepository(id, req.body)
    res.status(200).json(payment_detail)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack,
    })
  }
}

export const deletePaymentDetail = async (req, res) => {
  try {
    const { id } = req.params
    const payment_detail = await deletePaymentDetailRepository(id)
    res.status(200).json(payment_detail)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack,
    })
  }
}

export const getPaymentDetailById = async (req, res) => {
  try {
    const { id } = req.params
    const payment_detail = await getPaymentDetailByIdRepository(id)
    res.status(200).json(payment_detail)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack,
    })
  }
}

export const getAllPaymentDetails = async (req, res) => {
  try {
    const payment_details = await getAllPaymentDetailsRepository()
    res.status(200).json(payment_details)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack,
    })
  }
}

export const getPaymentDetailByAmountRange = async (req, res) => {
  try {
    const { start, end } = req.params
    const payment_details = await getPaymentDatailByAmountRange(start, end)
    res.status(200).json(payment_details)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack,
    })
  }
}