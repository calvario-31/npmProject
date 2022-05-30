const axios = require("axios").default;

//promise es un contenedor de un valor asíncrono
//se tiene que esperar que el promise termine -> fulfilled /rejected

//intentamos coger el request sin promise
const getCountrySinPromise = (country) => {
    console.log("sin promise");
    const repsonse = axios.get(`https://restcountries.com/v2/name/${country}`);
    console.log(repsonse);
};

//con promises:
const getCountryDataConPromise = (country) => {
    console.log("usando promise");
    axios
        .get(`https://restcountries.com/v2/name/${country}`)
        .then((response) => {
            console.log("response con promise:");
            console.log(response.data);
        });
};

//con async await:
const getCountryDataAsyncAwait1 = async () => {
    console.log("usando async await 1");
    const response = await axios.get("https://restcountries.com/v2/name/peru");
    console.log("response con async await 1:");
    console.log(response.data[0].translations);
};

const getCountryDataAsyncAwait2 = async () => {
    console.log("usando async await 2");
    console.log("esto debería correr después del json de perú");
    const response = await axios.get(
        "https://restcountries.com/v2/name/brazil"
    );
    console.log("response con async await 2:");
    console.log(response.data[0].translations);
};

//getCountrySinPromise("peru");
//getCountryDataConPromise("peru");
/* 
getCountryDataAsyncAwait1();
getCountryDataAsyncAwait2(); */

const ordenado = async () => {
    await getCountryDataAsyncAwait1();
    await getCountryDataAsyncAwait2();
};

ordenado();
