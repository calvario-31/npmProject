import { faker } from "@faker-js/faker";

const getPersona = () => {
  return {
    nombre: faker.name.firstName(),
    apellido: faker.name.lastName(),
    email: faker.internet.email(),
    telefono: faker.phone.phoneNumber(),
  };
};

export { getPersona };
