import { getCredentialsJson } from "./readExcel.js";

const getCredentialsMap = () => {
  const credentialsMap = new Map();
  const credentialsJson = getCredentialsJson();

  credentialsJson.forEach((element) => {
    credentialsMap.set(element.key, element);
  });

  return credentialsMap;
};

export { getCredentialsMap };
