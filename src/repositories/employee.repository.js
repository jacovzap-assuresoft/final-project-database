import prisma from '../config/db.config.js'

export const getAllEmployeesQuery = async () => {
  return prisma.employee.findMany({
    select: {
      employee_id: true,
      first_name: true,
      last_name: true,
      birth_date: true,
      address_id: true,
      store_id: true
    }
  })
}

export const getEmployeeByIdQuery = async id => {
  return prisma.employee.findUnique({
    where: {
      employee_id: id
    },
    select: {
      employee_id: true,
      first_name: true,
      last_name: true,
      birth_date: true,
      address_id: true,
      store_id: true
    }
  })
}

export const createEmployeeUseCase = async data => {
  return prisma.employee.create({
    data,
    select: {
      employee_id: true,
      first_name: true,
      last_name: true,
      birth_date: true,
      address_id: true,
      store_id: true
    }
  })
}

export const updateEmployeeUseCase = async ({ data, id }) => {
  return prisma.employee.update({
    where: {
      employee_id: id
    },
    data,
    select: {
      employee_id: true,
      first_name: true,
      last_name: true,
      birth_date: true,
      address_id: true,
      store_id: true
    }
  })
}

export const deleteEmployeeByIdUseCase = async id => {
  return prisma.employee.delete({
    where: {
      employee_id: id
    },
    select: {
      employee_id: true,
      first_name: true,
      last_name: true,
      birth_date: true,
      address_id: true,
      store_id: true
    }
  })
}
