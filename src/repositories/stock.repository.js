import prisma from '../config/db.config.js'

export const getAllStockRepository = async () => {
  return prisma.stock.findMany({
    select: {
      name: true,
      phone: true,
      address: {
        select: {
          address_id: true,
          address_dir: true,
          location: true,
          number: true
        }
      },
      store: {
        select: {
          store_id: true,
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
      }
    }
  })
}

export const getSingleStockRepository = async id => {
  return prisma.stock.findUnique({
    where: {
      stock_id: id
    },
    select: {
      name: true,
      phone: true,
      address: {
        select: {
          address_id: true,
          address_dir: true,
          location: true,
          number: true
        }
      },
      store: {
        select: {
          store_id: true,
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
      }
    }
  })
}

export const createStockRepository = async data => {
  return prisma.stock.create({
    data,
    select: {
      name: true,
      phone: true,
      address: {
        select: {
          address_id: true,
          address_dir: true,
          location: true,
          number: true
        }
      },
      store: {
        select: {
          store_id: true,
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
      }
    }
  })
}

export const updateStockRepository = async (id, data) => {
  return prisma.stock.update({
    where: {
      stock_id: id
    },
    data,
    select: {
      name: true,
      phone: true,
      address: {
        select: {
          address_id: true,
          address_dir: true,
          location: true,
          number: true
        }
      },
      store: {
        select: {
          store_id: true,
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
      }
    }
  })
}

export const deleteStoreRepository = async id => {
  return prisma.stock.delete({
    where: {
      stock_id: Number(id)
    },
    select: {
      name: true,
      phone: true,
      address: {
        select: {
          address_id: true,
          address_dir: true,
          location: true,
          number: true
        }
      },
      store: {
        select: {
          store_id: true,
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
      }
    }
  })
}
