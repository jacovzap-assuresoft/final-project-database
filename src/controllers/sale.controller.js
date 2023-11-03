import {
    getAllSalesRepository,
    getAllSalesDetailsRepository,
    getSaleByIdRepository,
    getSalesByEmployee,
    createSaleRepository,
    updateSaleRepository,
    upsertSaleRepository,
    deleteSaleRepository
} from "../repositories/sale.repository.js";

export const createSale = async (req, res) => {
    try {
        const sale = await createSaleRepository(req.body)
        res.status(200).json(sale)
    } catch (err) {
        res.status(500).json({
            message: err.message,
            trace: err.stack
        })
    }
}

export const updateSale = async (req, res) => {
    try {
        const { id } = req.params
        const sale = await updateSaleRepository(id, req.body)
        res.status(200).json(sale)
    } catch (err) {
        res.status(500).json({
            message: err.message,
            trace: err.stack
        })
    }
}

export const upsertSale = async (req, res) => {
    try {
        const { id } = req.params
        const sale = await upsertSaleRepository(id, req.body)
        res.status(200).json(sale)
    } catch (err) {
        res.status(500).json({
            message: err.message,
            trace: err.stack
        })
    }
}

export const deleteSale = async (req, res) => {
    try {
        const { id } = req.params
        const sale = await deleteSaleRepository(id)
        res.status(200).json(sale)
    } catch (err) {
        res.status(500).json({
            message: err.message,
            trace: err.stack
        })
    }
}

export const getSalesEmployee = async (req, res) => {
    try {
        const { id } = req.params
        const sales = await getSalesByEmployee(id)
        res.status(200).json(sales)
    } catch (err) {
        res.status(500).json({
            message: err.message,
            trace: err.stack
        })
    }
}

export const getAllSales = async (req, res) => {
    try {
        console.log("GAA")
        const sales = await getAllSalesRepository()
        console.log(sales)
        res.status(200).json(sales)
    } catch (err) {
        res.status(500).json({
            message: err.message,
            trace: err.stack
        })
    }
}

export const getSaleById = async (req, res) => {
    try {
        const { id } = req.params
        const sale = await getSaleByIdRepository(id)
        res.status(200).json(sale)
    } catch (err) {
        res.status(500).json({
            message: err.message,
            trace: err.stack
        })
    }
}

export const getAllSalesDetails = async (req, res) => {
    try {
        const sales = await getAllSalesDetailsRepository()
        res.status(200).json(sales)
    } catch (err) {
        res.status(500).json({
            message: err.message,
            trace: err.stack
        })
    }
}