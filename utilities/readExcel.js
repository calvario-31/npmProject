const excelToJson = require("convert-excel-to-json");

const excelPath = "./resources/testData.xlsx";

const getCredentialsJson = () => {
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
