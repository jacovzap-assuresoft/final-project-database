import prisma from '../config/db.config.js'

const PHYSICAL_CUSTOMER_INCLUDE = {
  customer: {
    include: {
      address: true
    }
  }
}

export const getAllPhysicalCustomers = async () => {
  return prisma.physical.findMany({
    include: PHYSICAL_CUSTOMER_INCLUDE
  })
}

export const getPhysicalCustomer = async (physicalCustomerId) => {
  return await prisma.physical.findUnique({
    where: { physical_id: physicalCustomerId },
    include: PHYSICAL_CUSTOMER_INCLUDE
  })
}

export const createPhysicalCustomerRepository = async (customerData, physicalData) => {
  let newPhysicalCustomer
  await prisma.$transaction(async (prisma) => {
    const customer = await prisma.customer.create({
      data: customerData
    })

    const customerId = customer.customer_id

    newPhysicalCustomer = await prisma.physical.create({
      data: {
        ...physicalData,
        customer_id: customerId
      },
      include: PHYSICAL_CUSTOMER_INCLUDE
    })
  })
  return newPhysicalCustomer
}

export const updatePhysicalCustomerRepository = async (physicalCustomerId, physicalCustomerData) => {
  return await prisma.physical.update({
    where: { physical_id: physicalCustomerId },
    data: physicalCustomerData,
    include: PHYSICAL_CUSTOMER_INCLUDE
  })
}

export const deletePhysicalCustomerRepository = async (physicalCustomerId) => {
  let customer
  await prisma.$transaction(async (prisma) => {
    customer = await prisma.physical.delete({
      where: { physical_id: physicalCustomerId },
      include: PHYSICAL_CUSTOMER_INCLUDE
    })

    const customerId = customer.customer_id

    await prisma.customer.delete({
      where: { customer_id: customerId }
    })
  })
  return customer
}
