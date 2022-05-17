const { getCredentialsJson, getItemsJson } = require("./readExcel");
const { log } = require("./logger");

const getCredentialsMap = () => {
    log.debug("Getting credentials map");
    const map = new Map();
    const credentialsJson = getCredentialsJson();

    credentialsJson.forEach((element) => {
        map.set(element.key, element);
    });

    return map;
};

const getItemsMap = () => {
    log.debug("Getting items map");
    const map = new Map();
    const itemsJson = getItemsJson();

    itemsJson.forEach((element) => {
        map.set(element.key, element);
    });

    return map;
};

module.exports = { getCredentialsMap, getItemsMap };
