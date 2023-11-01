import prisma from '../config/db.config.js'

export const getAllAdressesRepository = async () => {
  return prisma.address.findMany({
    select: {
      address_id: true,
      address_dir: true,
      location: true,
      number: true
    }
  })
}
