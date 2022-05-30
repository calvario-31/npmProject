//cómo saber si un método es asíncrono? -> documentación

/*lo que hace el await es que espera que se cumpla el promise y paraliza el orden de ESE método
hasta que se cumpla

Si es que se llama a un método que es async (por ejm, abajo hacerClick, verificar) 
en otro método (por ejemplo testMalo) y en este otro se pone await 
entonces se ejecuta en el orden que se especifica.
Esto nos conviene ya que nuestros flujos tienen que tener un orden que se tiene que cumplir

Si es que se llama en un método que NO tiene await (por ejm testSinAwait), entonces
no va a terminar que se ejecute el hacerClick o el verificarAlgo y va a continuar. Si bien, estos
métodos mencionados tienen await y se van a ejecutar, en el método testSinAwait no lo tiene. En
conclusión, van a correr en el orden que terminen el promise
*/

//metodo async de ejemplo 1
const hacerClickAAlgo = async () => {
  //declaro asíncronía para usar await
  //await del click mismo para que sí haga click, caso contrario no se concluye el promise
  await click; //aka await de nivel 1
};

//metodo async de ejemplo 2
const verificarAlgo = async () => {
  //declaro asíncronía para usar await
  //await del verificar mismo para que sí haga click, caso contrario no se concluye el promise
  await verificar; //aka await de nivel 1
};

//este es mi test que quiero que corra tal cual el orden que pongo
const test = async () => {
  //await para que se ejecute en el orden que yo quiero sino se ejecuta ni bien termina el promise
  await hacerclick(); //aka await de nivel 2
  //await para que se ejecute en el orden que yo quiero sino se ejecuta ni bien termina el promise
  await verificarAlgo(); //aka await de nivel 2
  console.log("final del test"); //no necesita await ya que NO es asíncrono o sea es síncrono
};

//este es mi test malo, no le pongo async y await entonces no correrá en ese mismo orden
const testMalo = () => {
  //el hacer click sí se va a ejecutar pero CUANDO SE TERMINE DE CUMPLIR EL PROMISE
  hacerclick();
  //el verificarAlgo sí se va a ejecutar pero CUANDO SE TERMINE DE CUMPLIR EL PROMISE
  verificarAlgo();
  console.log("final del test");
  //en otras palabras NO va a terminar que se ejecute
  //lo primero que se mostrará será el console.log ya que NO es asíncrono
  //el hacer click y verificar se ejecutarán cuando termine el promise
};

const foo = async () => {
  await whereamI("portugal"); //para que se ejecute en el orden que deseo
  console.log("pipipippi"); //no es necesario await ya que no es asíncrono
};

const foo2 = async () => {
  await llamoUnApi(); //para que se ejecute en el orden que deseo
  console.log("aea"); //no es necesario await ya que no es asíncrono
};
