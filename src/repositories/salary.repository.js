import prisma from '../config/db.config.js'

export const getAllSalariesQuery = async () => {
  return prisma.salary.findMany({
    select: {
      salary_id: true,
      employee_id: true,
      start_date: true,
      end_date: true,
      payment_date: true,
      currency_code: true,
      amount: true
    }
  })
}

export const getSalaryByIdQuery = async id => {
  return prisma.salary.findUnique({
    where: {
      salary_id: id
    },
    select: {
      salary_id: true,
      employee_id: true,
      start_date: true,
      end_date: true,
      payment_date: true,
      currency_code: true,
      amount: true
    }
  })
}

export const createSalaryUseCase = async data => {
  return prisma.salary.create({
    data,
    select: {
      salary_id: true,
      employee_id: true,
      start_date: true,
      end_date: true,
      payment_date: true,
      currency_code: true,
      amount: true
    }
  })
}

export const updateSalaryUseCase = async ({ data, id }) => {
  return prisma.salary.update({
    where: {
      salary_id: id
    },
    data,
    select: {
      salary_id: true,
      employee_id: true,
      start_date: true,
      end_date: true,
      payment_date: true,
      currency_code: true,
      amount: true
    }
  })
}

export const deleteSalaryByIdUseCase = async id => {
  return prisma.salary.delete({
    where: {
      salary_id: id
    },
    select: {
      salary_id: true,
      employee_id: true,
      start_date: true,
      end_date: true,
      payment_date: true,
      currency_code: true,
      amount: true
    }
  })
}