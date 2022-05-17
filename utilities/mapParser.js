const { getCredentialsJson, getItemsJson } = require("./readExcel");

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

module.exports = { getCredentialsMap, getItemsMap };
