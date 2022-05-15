import { getPersona } from "./utilities/fakerProvider.js";
import { getCredentialsJson, getItemsJson } from "./utilities/readExcel.js";
import { getCredentialsMap, getItemsMap } from "./utilities/mapParser.js";

const printSeparator = () => {
    console.log();
    console.log("========================================");
    console.log();
};

printSeparator();
const persona = getPersona();
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.telefono);

printSeparator();
const credentialsJson = getCredentialsJson();
console.log(credentialsJson);

printSeparator();
const itemJson = getItemsJson();
console.log(itemJson);

printSeparator();
const credentialsMap = getCredentialsMap();
const glitchCredentials = credentialsMap.get("glitch");
console.log(`Username for glitched: ${glitchCredentials.username}`);
console.log(`Password for glitched: ${glitchCredentials.password}`);

printSeparator();
const lockedCredentials = credentialsMap.get("locked");
console.log(`Username for locked: ${lockedCredentials.username}`);
console.log(`Password for locked: ${lockedCredentials.password}`);

printSeparator();
const itemsMap = getItemsMap();
const bikeItem = itemsMap.get("bike");
console.log(`Name for bikeItem: ${bikeItem.itemName}`);
console.log(`Id for bikeItem: ${bikeItem.itemId}`);
console.log(`Price for bikeItem: ${bikeItem.price}`);
console.log(`Quantity for bikeItem: ${bikeItem.quantity}`);

printSeparator();
const shirtItem = itemsMap.get("shirt");
console.log(`Name for shirtItem: ${shirtItem.itemName}`);
console.log(`Id for shirtItem: ${shirtItem.itemId}`);
console.log(`Price for shirtItem: ${shirtItem.price}`);
console.log(`Quantity for shirtItem: ${shirtItem.quantity}`);
