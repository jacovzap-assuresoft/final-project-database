import prisma from '../config/db.config.js'

export const getAllStoresRepository = async () => {
  return prisma.store.findMany({
    select: {
      phone: true,
      address: {
        select: {
          address_id: true,
          address_dir: true,
          location: true,
          number: true
        }
      }
    }
  })
}

export const getSingleStoreRepository = async id => {
  return prisma.store.findUnique({
    where: {
      store_id: id
    },
    select: {
      phone: true,
      address: {
        select: {
          address_id: true,
          address_dir: true,
          location: true,
          number: true
        }
      }
    }
  })
}

export const createStoreRepository = async data => {
  return prisma.store.create({
    data,
    select: {
      phone: true,
      address: {
        select: {
          address_id: true,
          address_dir: true,
          location: true,
          number: true
        }
      }
    }
  })
}

export const updateStoreRepository = async (id, data) => {
  return prisma.store.update({
    where: {
      store_id: id
    },
    data,
    select: {
      phone: true,
      address: {
        select: {
          address_id: true,
          address_dir: true,
          location: true,
          number: true
        }
      }
    }
  })
}

export const deleteStoreRepository = async id => {
  return prisma.store.delete({
    where: {
      store_id: id
    },
    select: {
      phone: true,
      address: {
        select: {
          address_id: true,
          address_dir: true,
          location: true,
          number: true
        }
      }
    }
  })
}
