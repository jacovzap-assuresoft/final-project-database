import prisma from '../config/db.config.js'

const VEHICLE_SELECT = {
  vehicle_id: true,
  model_id: true,
  stock_id: true,
  identify_number: true,
  chasis_number: true,
  color_code: true
}

export const getAllVehiclesRepository = async () => {
  return prisma.vehicle.findMany({
    select: VEHICLE_SELECT
  })
}

export const getSingleVehicleRepository = async id => {
  return prisma.vehicle.findUnique({
    where: {
      vehicle_id: id
    },
    select: VEHICLE_SELECT
  })
}

export const createVehicleRepository = async data => {
  return prisma.vehicle.create({
    data,
    select: VEHICLE_SELECT
  })
}

export const updateVehicleRepository = async (id, data) => {
  return prisma.vehicle.update({
    where: {
      vehicle_id: id
    },
    data,
    select: VEHICLE_SELECT
  })
}

export const deleteVehicleRepository = async id => {
  return prisma.vehicle.delete({
    where: {
      vehicle_id: Number(id)
    },
    select: VEHICLE_SELECT
  })
}
