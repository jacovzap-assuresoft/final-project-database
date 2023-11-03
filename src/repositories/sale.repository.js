import prisma from "../config/db.config.js"

const SALE_SELECT = {
    sale_id: true,
    state_code: true,
    payment_id: true,
    customer_id: true,
    employee_id: true,
    vehicle_id: true
}

const ADDRESS_SELECT = {
    address_id: true,
    address_dir: true,
    location: true,
    number: true
}

const CATALOGUE_SELECT = {
    catalogue_id: true,
    type: true,
    code: true,
    description: true
}

const STORE_SELECT = {
    store_id: true,
    phone: true,
    address: {
        select: ADDRESS_SELECT
    }
}

export const createSaleRepository = async (sale) => {
    return prisma.sale.create({
        data: sale,
        select: SALE_SELECT
    })
}

export const updateSaleRepository = async (id, sale) => {
    return prisma.sale.update({
        where: {
            sale_id: Number(id)
        },
        data: sale,
        select: SALE_SELECT
    })
}

export const upsertSaleRepository = async (id, sale) => {
    return prisma.sale.upsert({
        where: {
            sale_id: Number(id)
        },
        update: sale,
        create: sale,
        select: SALE_SELECT
    })
}

export const deleteSaleRepository = async (id) => {
    return prisma.sale.delete({
        where: {
            sale_id: Number(id)
        },
        select: SALE_SELECT
    })

}

export const getAllSalesRepository = async () => {
    return prisma.sale.findMany({
        select: SALE_SELECT
    })
}

export const getSaleByIdRepository = async (id) => {
    return prisma.sale.findUnique({
        where: {
            sale_id: Number(id)
        },
        select: SALE_SELECT
    })
}

export const getSalesByEmployee = async (employee_id) => {
    return prisma.sale.findMany({
        where:{
            employee_id: employee_id
        },
        select: SALE_SELECT
    })
}

export const getAllSalesDetailsRepository = async () => {
    return prisma.sale.findMany({
        select: {
            sale_id: true,
            state_code: true,
            payment_id: true,
            customer_id: true,
            employee_id: true,
            vehicle_id: true,
            customer: {
                select: {
                    customer_id: true,
                    address: {
                        select: ADDRESS_SELECT
                    }
                }
            },
            employee: {
                select: {
                    employee_id: true,
                    first_name: true,
                    last_name: true,
                    birth_date: true,
                    address: {
                        select: ADDRESS_SELECT
                    },
                    store: {
                        select: STORE_SELECT
                    }
                }
            },
            catalogue: {
                select: CATALOGUE_SELECT
            },
            vehicle: {
                select: {
                    vehicle_id: true,
                    identify_number: true,
                    chasis_number: true,
                    model_id: true,
                    stock_id: true,
                    color_code: true,
                    catalogue: {
                        select: CATALOGUE_SELECT
                    },
                    model: {
                        select: {
                            model_id: true,
                            name: true,
                            brand_code: true,
                            model_date: true,
                            description: true,
                            price: true,
                            catalogue_model_brand_codeTocatalogue: {
                                select: CATALOGUE_SELECT
                            }
                        }
                    },
                    stock: {
                        select: {
                            stock_id: true,
                            name: true,
                            phone: true,
                            address_id: true,
                            store_id: true,
                            address: {
                                select: ADDRESS_SELECT
                            },
                            store: {
                                select: STORE_SELECT
                            }
                        }
                    }
                }
            }
        }
    })
}