import excelToJson from "convert-excel-to-json";

const credentialsJson = excelToJson({
  sourceFile: "../resources/testData.xlsx",
  header: { rows: 1 },
  sheets: ["credentials"],
  columnToKey: {
    A: "key",
    B: "username",
    C: "password",
  },
});

export { credentialsJson };
