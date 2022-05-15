import { faker } from "@faker-js/faker";

class Persona {
  constructor() {
    this.nombre = faker.name.firstName();
    this.apellido = faker.name.lastName();
    this.email = faker.internet.email();
    this.telefono = faker.phone.phoneNumber();
  }
}

export { Persona };
