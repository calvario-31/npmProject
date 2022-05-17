const excelToJson = require("convert-excel-to-json");
const { log } = require("./logger");

const excelPath = "./resources/testdata/testData.xlsx";

const getCredentialsJson = () => {
    log.debug("Getting credentials json from excel");
    const json = excelToJson({
        sourceFile: excelPath,
        header: { rows: 1 },
        sheets: ["credentials"],
        columnToKey: {
            "*": "{{columnHeader}}",
        },
    });

    return json.credentials;
};

const getItemsJson = () => {
    log.debug("Getting items json from excel");
    const json = excelToJson({
        sourceFile: excelPath,
        header: { rows: 1 },
        sheets: ["itemData"],
        columnToKey: {
            "*": "{{columnHeader}}",
        },
    });

    return json.itemData;
};

module.exports = { getCredentialsJson, getItemsJson };
