import prisma from '../config/db.config.js'

const employeeBody = {
  employee_id: true,
  first_name: true,
  last_name: true,
  birth_date: true,
  address_id: true,
  store_id: true
}

export const getAllEmployeesRepository = async () => {
  return prisma.employee.findMany({
    select: employeeBody
  })
}

export const getSingleEmployeeRepository = async id => {
  return prisma.employee.findUnique({
    where: {
      employee_id: id
    },
    select: employeeBody
  })
}

export const createEmployeeRepository = async data => {
  return prisma.employee.create({
    data,
    select: employeeBody
  })
}

export const updateEmployeeRepository = async ({ data, id }) => {
  return prisma.employee.update({
    where: {
      employee_id: id
    },
    data,
    select: employeeBody
  })
}

export const deleteEmployeeRepository = async id => {
  return prisma.employee.delete({
    where: {
      employee_id: id
    },
    select: employeeBody
  })
}
