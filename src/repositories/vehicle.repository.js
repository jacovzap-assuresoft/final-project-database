import prisma from '../config/db.config.js'

export const getAllVehiclesRepository = async () => {
  return prisma.vehicle.findMany({
    select: {
      vehicle_id: true,
      model_id: true,
      stock_id: true,
      identify_number: true,
      chasis_number: true,
      color_code: true
    }
  })
}

export const getSingleVehicleRepository = async id => {
  return prisma.vehicle.findUnique({
    where: {
      vehicle_id: id
    },
    select: {
      vehicle_id: true,
      model_id: true,
      stock_id: true,
      identify_number: true,
      chasis_number: true,
      color_code: true
    }
  })
}

export const createVehicleRepository = async data => {
  return prisma.vehicle.create({
    data,
    select: {
      vehicle_id: true,
      model_id: true,
      stock_id: true,
      identify_number: true,
      chasis_number: true,
      color_code: true
    }
  })
}

export const updateVehicleRepository = async (id, data) => {
  return prisma.vehicle.update({
    where: {
      vehicle_id: id
    },
    data,
    select: {
      vehicle_id: true,
      model_id: true,
      stock_id: true,
      identify_number: true,
      chasis_number: true,
      color_code: true
    }
  })
}

export const deleteVehicleRepository = async id => {
  return prisma.vehicle.delete({
    where: {
      vehicle_id: Number(id)
    },
    select: {
      vehicle_id: true,
      model_id: true,
      stock_id: true,
      identify_number: true,
      chasis_number: true,
      color_code: true
    }
  })
}
