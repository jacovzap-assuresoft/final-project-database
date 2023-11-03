import prisma from "../config/db.config.js";

export const createPaymentRepository = async (payment) => {
  return prisma.payment.create({
    data: payment,
    select: {
      payment_id: true,
      payment_date: true,
      payment_detail_id: true,
      employee_id: true,
      sale_id: true,
    }
  });
}

export const getAllPaymentsRepository = async () => {
  return prisma.payment.findMany({
    select: {
      payment_id: true,
      payment_date: true,
      payment_detail_id: true,
      employee_id: true,
      sale_id: true,
    }
  });
}

export const getPaymentByIdRepository = async (id) => {
  return prisma.payment.findUnique({
    where: {
      payment_id: Number(id)
    },
    select: {
      payment_id: true,
      payment_date: true,
      payment_detail_id: true,
      employee_id: true,
      sale_id: true,
    }
  });
}

export const updatePaymentRepository = async (id, payment) => {
  return prisma.payment.update({
    where: {
      payment_id: Number(id)
    },
    data: payment,
    select: {
      payment_id: true,
      payment_date: true,
      payment_detail_id: true,
      employee_id: true,
      sale_id: true,
    }
  });
}

export const upsertPaymentRepository = async (id, payment) => {
  return prisma.payment.upsert({
    where: {
      payment_id: Number(id)
    },
    update: payment,
    create: payment,
    select: {
      payment_id: true,
      payment_date: true,
      payment_detail_id: true,
      employee_id: true,
      sale_id: true,
    }
  });
}

export const deletePaymentRepository = async (id) => {
  return prisma.payment.delete({
    where: {
      payment_id: Number(id)
    },
    select: {
      payment_id: true,
      payment_date: true,
      payment_detail_id: true,
      employee_id: true,
      sale_id: true,
    }
  });
}

export const getPaymentsByRangeRepo = async (start, end) => {
  return prisma.payment.findMany({
    where: {
      payment_date: {
        gte: new Date(start),
        lte: new Date(end)
      }
    },
    select: {
      payment_id: true,
      payment_date: true,
      payment_detail_id: true,
      employee_id: true,
      sale_id: true,
    }
  });
}

export const getPaymentsByEmployeeRepo = async (id) => {
  return prisma.payment.findMany({
    where: {
      employee_id: Number(id)
    },
    select: {
      payment_id: true,
      payment_date: true,
      payment_detail_id: true,
      employee_id: true,
      sale_id: true,
    }
  });
}

export const getAllPaymentsDetailsRepo = async () => {
  return prisma.payment.findMany({
    select: {
      payment_id: true,
      payment_date: true,
      payment_detail_id: true,
      employee_id: true,
      sale_id: true,
      employee: {
        select: {
            employee_id: true,
            first_name: true,
            last_name: true,
            birth_date: true,
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
                    phone: true
                }
            }
        }
      },
      sale: {
        select: {
          sale_id: true,
          state_code: true
        }
      },
      payment_detail: {
        select: {
          payment_detail_id: true,
          description: true,
          type_code: true,
          currency_code: true,
          amount: true,
          receipt_code: true
        }
      }
    }
  })
}