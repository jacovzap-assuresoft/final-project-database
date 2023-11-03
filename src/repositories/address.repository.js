import prisma from '../config/db.config.js'

const ADDRESS_SELECT = {
  address_id: true,
  address_dir: true,
  location: true,
  number: true
  }

export const getAllAddressesRepository = async () => {
  return prisma.address.findMany({
    select: ADDRESS_SELECT
  })
}

export const getAddressRepository = async (addresId) => {
  return prisma.address.findUnique({
    where: {
      address_id: addresId
    }
  }, {
    select: ADDRESS_SELECT
  })
}

export const createAddressRepository = async (addressData) => {
  return prisma.address.create({
    data: addressData,
    select: ADDRESS_SELECT
  })
}

export const updateAddressRepository = async (addressId, addressData) => {
  return prisma.address.update({
    where: {
      address_id: addressId
    },
    data: addressData,
    select: ADDRESS_SELECT
  })
}

export const deleteAddressRepository = async (addresId) => {
  return prisma.address.delete({
    where: {
      address_id: addresId
    }
  }, {
    select: ADDRESS_SELECT
  })
}
