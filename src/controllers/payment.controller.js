import {
  createPaymentRepository,
  getAllPaymentsRepository,
  getPaymentByIdRepository,
  getAllPaymentsDetailsRepo,
  getPaymentsByRangeRepo,
  updatePaymentRepository,
  upsertPaymentRepository,
} from '../repositories/payment.repository.js';

export const createPayment = async (req, res) => {
  try {
    const payment = await createPaymentRepository(req.body)
    const paymentDetail = await createPaymentRepository(req.body)
    res.status(200).json(payment)
  } catch (err){
    res.status(500).json({
      message: err.message,
      trace: err.stack,
    })
  }
}

export const updatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await updatePaymentRepository(id, req.body)
    res.status(200).json(payment)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack,
    })
  }
}

export const upsertPayment = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await upsertPaymentRepository(id, req.body)
    res.status(200).json(payment)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack,
    })
  }
}

export const getPaymentsByRange = async (req, res) => {
  try {
    const { start, end } = req.params
    const payments = await getPaymentsByRangeRepo(start, end)
    res.status(200).json(payments)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack,
    })
  }
}

export const getAllPayments = async (req, res) => {
  try {
    const payments = await getAllPaymentsRepository()
    res.status(200).json(payments)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack,
    })
  }
}

export const getPaymentById = async (req, res) => {
  try {
    const { id } = req.params
    const payment = await getPaymentByIdRepository(id)
    res.status(200).json(payment)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack,
    })
  }
}

export const getAllPaymentsDetails = async (req, res) => {
  try {
    const payments = await getAllPaymentsDetailsRepo()
    res.status(200).json(payments)
  } catch (err) {
    res.status(500).json({
      message: err.message,
      trace: err.stack,
    })
  }
}