import prisma from '../config/db.config.js'

const salaryBody = {
  salary_id: true,
  employee_id: true,
  start_date: true,
  end_date: true,
  payment_date: true,
  currency_code: true,
  amount: true
}

export const getAllSalariesRepository = async () => {
  return prisma.salary.findMany({
    select: salaryBody
  })
}

export const getSingleSalaryRepository = async id => {
  return prisma.salary.findUnique({
    where: {
      salary_id: id
    },
    select: salaryBody
  })
}

export const createSalaryRepository = async data => {
  return prisma.salary.create({
    data,
    select: salaryBody
  })
}

export const updateSalaryRepository = async ({ data, id }) => {
  return prisma.salary.update({
    where: {
      salary_id: id
    },
    data,
    select: salaryBody
  })
}

export const deleteSalaryRepository = async id => {
  return prisma.salary.delete({
    where: {
      salary_id: id
    },
    select: salaryBody
  })
}
