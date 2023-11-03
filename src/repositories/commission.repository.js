import prisma from '../config/db.config.js'

export const getAllCommissionsRepository = async () => {
  return prisma.commission.findMany({
    select: {
      description: true,
      amount: true,
      employee: {
        select: {
          first_name: true,
          last_name: true,
          birth_date: true,
          address: {
            select: {
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

export const getSingleComissionRepository = async id => {
  return prisma.commission.findUnique({
    where: {
      commission_id: id
    },
    select: {
      description: true,
      amount: true,
      employee: {
        select: {
          first_name: true,
          last_name: true,
          birth_date: true,
          address: {
            select: {
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

export const createCommissionRepository = async data => {
  return prisma.commission.create({
    data,
    select: {
      description: true,
      amount: true,
      employee: {
        select: {
          first_name: true,
          last_name: true,
          birth_date: true,
          address: {
            select: {
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

export const updateCommissionRepository = async (id, data) => {
  return prisma.commission.update({
    where: {
      commission_id: id
    },
    data,
    select: {
      description: true,
      amount: true,
      employee: {
        select: {
          first_name: true,
          last_name: true,
          birth_date: true,
          address: {
            select: {
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

export const deleteCommissionRepository = async id => {
  return prisma.commission.delete({
    where: {
      commission_id: id
    },
    select: {
      description: true,
      amount: true,
      employee: {
        select: {
          first_name: true,
          last_name: true,
          birth_date: true,
          address: {
            select: {
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
