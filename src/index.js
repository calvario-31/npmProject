import { Persona } from "./models/Persona.class.js";
import { credentialsJson } from "./readExcel.js";

const persona = new Persona();
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.telefono);

const json = credentialsJson;
console.log(json);
