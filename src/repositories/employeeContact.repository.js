import prisma from '../config/db.config.js'

const employeeContactBody = {
  contact_id: true,
  employee_id: true,
  contact_type: true,
  contact_value: true
}

export const getAllEmployeeContactsRepository = async () => {
  return prisma.employee_contact.findMany({
    select: employeeContactBody
  })
}

export const getSingleEmployeeContactRepository = async id => {
  return prisma.employee_contact.findUnique({
    where: {
      contact_id: id
    },
    select: employeeContactBody
  })
}

export const createEmployeeContactRepository = async data => {
  return prisma.employee_contact.create({
    data,
    select: employeeContactBody
  })
}

export const updateEmployeeContactRepository = async (data, id) => {
  return prisma.employee_contact.update({
    where: {
      contact_id: id
    },
    data,
    select: employeeContactBody
  })
}

export const deleteEmployeeContactRepository = async id => {
  return prisma.employee_contact.delete({
    where: {
      contact_id: id
    },
    select: employeeContactBody
  })
}
