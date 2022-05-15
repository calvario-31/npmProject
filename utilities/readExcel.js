import excelToJson from "convert-excel-to-json";

const getCredentialsJson = () => {
  const json = excelToJson({
    sourceFile: "./resources/testData.xlsx",
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

export { getCredentialsJson };
