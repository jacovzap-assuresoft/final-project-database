import prisma from '../config/db.config.js'

export const getAllEmployeeContactsQuery = async () => {
  return prisma.employee_contact.findMany({
    select: {
      contact_id: true,
      employee_id: true,
      contact_type: true,
      contact_value: true
    }
  })
}

export const getEmployeeContactByIdQuery = async id => {
  return prisma.employee_contact.findUnique({
    where: {
      contact_id: id
    },
    select: {
      contact_id: true,
      employee_id: true,
      contact_type: true,
      contact_value: true
    }
  })
}

export const createEmployeeContactUseCase = async data => {
  return prisma.employee_contact.create({
    data,
    select: {
      contact_id: true,
      employee_id: true,
      contact_type: true,
      contact_value: true
    }
  })
}

export const updateEmployeeContactUseCase = async ({ data, id }) => {
  return prisma.employee_contact.update({
    where: {
      contact_id: id
    },
    data,
    select: {
      contact_id: true,
      employee_id: true,
      contact_type: true,
      contact_value: true
    }
  })
}

export const deleteEmployeeContactByIdUseCase = async id => {
  return prisma.employee_contact.delete({
    where: {
      contact_id: id
    },
    select: {
      contact_id: true,
      employee_id: true,
      contact_type: true,
      contact_value: true
    }
  })
}
