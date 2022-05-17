const { faker } = require("@faker-js/faker");
const { log } = require("./logger");

const getPersona = () => {
    log.debug("Getting persona from faker");
    return {
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        email: faker.internet.email(),
        telefono: faker.phone.phoneNumber(),
    };
};

module.exports = { getPersona };
