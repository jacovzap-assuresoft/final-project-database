import prisma from '../config/db.config.js'

const employeeBody = {
  employee_id: true,
  first_name: true,
  last_name: true,
  birth_date: true,
  address_id: true,
  store_id: true
}

export const getAllEmployeesQuery = async () => {
  return prisma.employee.findMany({
    select: employeeBody
  })
}

export const getEmployeeByIdQuery = async id => {
  return prisma.employee.findUnique({
    where: {
      employee_id: id
    },
    select: employeeBody
  })
}

export const createEmployeeUseCase = async data => {
  return prisma.employee.create({
    data,
    select: employeeBody
  })
}

export const updateEmployeeUseCase = async ({ data, id }) => {
  return prisma.employee.update({
    where: {
      employee_id: id
    },
    data,
    select: employeeBody
  })
}

export const deleteEmployeeByIdUseCase = async id => {
  return prisma.employee.delete({
    where: {
      employee_id: id
    },
    select: employeeBody
  })
}
