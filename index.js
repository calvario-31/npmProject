const { getPersona } = require("./utilities/fakerProvider");
const { getCredentialsJson, getItemsJson } = require("./utilities/readExcel");
const { getCredentialsMap, getItemsMap } = require("./utilities/mapParser");
const { log } = require("./utilities/logger");

const printSeparator = () => {
    log.info("");
    log.info("========================================");
    log.info("");
};

printSeparator();
const persona = getPersona();
log.info(persona.nombre);
log.info(persona.apellido);
log.info(persona.email);
log.info(persona.telefono);

printSeparator();
const credentialsJson = getCredentialsJson();
log.info(JSON.stringify(credentialsJson, null, 2));

printSeparator();
const itemJson = getItemsJson();
log.info(JSON.stringify(itemJson, null, 2));

printSeparator();
const credentialsMap = getCredentialsMap();
const glitchCredentials = credentialsMap.get("glitch");
log.info(`Username for glitched: ${glitchCredentials.username}`);
log.info(`Password for glitched: ${glitchCredentials.password}`);

printSeparator();
const lockedCredentials = credentialsMap.get("locked");
log.info(`Username for locked: ${lockedCredentials.username}`);
log.info(`Password for locked: ${lockedCredentials.password}`);

printSeparator();
const itemsMap = getItemsMap();
const bikeItem = itemsMap.get("bike");
log.info(`Name for bikeItem: ${bikeItem.itemName}`);
log.info(`Id for bikeItem: ${bikeItem.itemId}`);
log.info(`Price for bikeItem: ${bikeItem.price}`);
log.info(`Quantity for bikeItem: ${bikeItem.quantity}`);

printSeparator();
const shirtItem = itemsMap.get("shirt");
log.info(`Name for shirtItem: ${shirtItem.itemName}`);
log.info(`Id for shirtItem: ${shirtItem.itemId}`);
log.info(`Price for shirtItem: ${shirtItem.price}`);
log.info(`Quantity for shirtItem: ${shirtItem.quantity}`);
