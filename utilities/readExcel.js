import excelToJson from "convert-excel-to-json";

const excelPath = "./resources/testData.xlsx";

const getCredentialsJson = () => {
    const json = excelToJson({
        sourceFile: excelPath,
        header: { rows: 1 },
        sheets: ["credentials"],
        columnToKey: {
            A: "key",
            B: "username",
            C: "password",
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
            A: "key",
            B: "itemName",
            C: "itemId",
            D: "price",
            E: "quantity",
        },
    });

    return json.itemData;
};

export { getCredentialsJson, getItemsJson };
