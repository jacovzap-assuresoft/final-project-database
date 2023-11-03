import prisma from '../config/db.config.js'

const CUSTOMER_CONTACT_SELECT = {
  contact_id: true,
  customer_id: true,
  type: true,
  value: true,
  customer: {
    include: {
      physical: true,
      juridical: true
    }
  }
}

export const getAllCustomerContactsRepository = async () => {
  return await prisma.customer_contact.findMany({
    select: CUSTOMER_CONTACT_SELECT
  })
}

export const getCustomerContactsRepository = async (customerId) => {
  return await prisma.customer_contact.findMany({
    where: {
      customer_id: customerId
    },
    select: CUSTOMER_CONTACT_SELECT
  })
}

export const createCustomerContactRepository = async (contactData) => {
  return await prisma.customer_contact.create({
    data: contactData,
    select: CUSTOMER_CONTACT_SELECT
  })
}

export const updateCustomerContactRepository = async (contactId, contactData) => {
  return await prisma.customer_contact.update({
    where: {
      contact_id: contactId
    },
    data: contactData,
    select: CUSTOMER_CONTACT_SELECT
  })
}

export const deleteCustomerContactRepository = async (contactId) => {
  return await prisma.customer_contact.delete({
    where: {
      contact_id: contactId
    },
    select: CUSTOMER_CONTACT_SELECT
  })
}
