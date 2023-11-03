import prisma from '../config/db.config.js'

const JURIDICAL_CUSTOMER_INCLUDE = {
  customer: {
    include: {
      address: true
    }
  }
}

export const getAllJuridicalCustomersRepository = async () => {
  return prisma.juridical.findMany({
    include: JURIDICAL_CUSTOMER_INCLUDE
  })
}

export const getJuridicalCustomerRepository = async (juridicalCustomerId) => {
  return await prisma.juridical.findUnique({
    where: { juridical_id: juridicalCustomerId },
    include: JURIDICAL_CUSTOMER_INCLUDE
  })
}

export const createJuridicalCustomerRepository = async (customerData, juridicalData) => {
  let newJuridicalCustomer
  await prisma.$transaction(async (prisma) => {
    const customer = await prisma.customer.create({
      data: customerData
    })

    const customerId = customer.customer_id

    newJuridicalCustomer = await prisma.juridical.create({
      data: {
        ...juridicalData,
        customer_id: customerId
      },
      include: JURIDICAL_CUSTOMER_INCLUDE
    })
  })
  return newJuridicalCustomer
}

export const updateJuridicalCustomerRepository = async (juridicalCustomerId, juridicalCustomerData) => {
  return await prisma.juridical.update({
    where: { juridical_id: juridicalCustomerId },
    data: juridicalCustomerData,
    include: JURIDICAL_CUSTOMER_INCLUDE
  })
}

export const deleteJuridicalCustomerRepository = async (juridicalCustomerId) => {
  let customer
  await prisma.$transaction(async (prisma) => {
    customer = await prisma.juridical.delete({
      where: { juridical_id: juridicalCustomerId },
      include: JURIDICAL_CUSTOMER_INCLUDE
    })

    const customerId = customer.customer_id

    await prisma.customer.delete({
      where: { customer_id: customerId }
    })
  })
  return customer
}
