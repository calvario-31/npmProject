import { getCredentialsJson, getItemsJson } from "./readExcel.js";

const getCredentialsMap = () => {
    const map = new Map();
    const credentialsJson = getCredentialsJson();

    credentialsJson.forEach((element) => {
        map.set(element.key, element);
    });

    return map;
};

const getItemsMap = () => {
    const map = new Map();
    const itemsJson = getItemsJson();

    itemsJson.forEach((element) => {
        map.set(element.key, element);
    });

    return map;
};

export { getCredentialsMap, getItemsMap };
