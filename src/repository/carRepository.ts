import { prisma } from "../config/database.js";

async function getCars() {
  const cars = await prisma.cars.findMany();
  return cars;
}

async function getCar(id: number) {
  const cars = await prisma.cars.findFirst({
    where: {
      id: id
    }
  });
  return cars;
}

async function getCarWithLicensePlate(licensePlate: string) {
  const cars = await prisma.cars.findFirst({
    where: {
      licensePlate: licensePlate
    }
  });
  return cars;
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  await prisma.cars.create({
    data: {
      model: model,
      licensePlate: licensePlate,
      year: year,
      color: color
    }
  });
}

async function deleteCar(id: number) {
  await prisma.cars.delete({
    where: {
      id: id
    }
  });
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;