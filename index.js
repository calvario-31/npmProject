import { getPersona } from "./utilities/fakerProvider.js";
import { getCredentialsJson } from "./utilities/readExcel.js";
import { getCredentialsMap } from "./utilities/mapParser.js";

const persona = getPersona();
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.telefono);

console.log(getCredentialsJson());

const credentialsMap = getCredentialsMap();
const glitchCredentials = credentialsMap.get("glitch");
console.log(`Username for glitched: ${glitchCredentials.username}`);
console.log(`Password for glitched: ${glitchCredentials.password}`);

const lockedCredentials = credentialsMap.get("locked");
console.log(`Username for locked: ${lockedCredentials.username}`);
console.log(`Password for locked: ${lockedCredentials.password}`);
