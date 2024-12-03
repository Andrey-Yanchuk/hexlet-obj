// exported-functions.js
import _ from "lodash";
// import example from "./example.json" assert { type: "json" };
/*-----------------------------------------------------*/
export const getExampleJson = (object) => {
  return object;
};
/*-----------------------------------------------------*/
export const normalize = (object) => {
  if (Object.keys(object).length === 0) return "Specify a non-empty object!";
  object.name = _.capitalize(object.name);
  object.description = object.description.toLowerCase();
  return object;
};
/*-----------------------------------------------------*/
export const is = (obj1, obj2) =>
  obj1.name === obj2.name &&
  obj1.state === obj2.state &&
  obj1.website === obj2.website;
/*-----------------------------------------------------*/
export const getDomainInfo = (link) => {
  let scheme = "http";
  let name = link;
  if (link.startsWith("https://")) {
    scheme = "https";
    name = link.replace("https://", "");
  }
  if (link.startsWith("http://")) {
    scheme = "http";
    name = link.replace("http://", "");
  }
  return {
    scheme,
    name,
  };
};
/*-----------------------------------------------------*/
export const countWords = (sentence) => {
  if (!sentence) return {};
  const result = {};
  for (const word of _.words(sentence.toLowerCase())) {
    result[word] = (result[word] ?? 0) + 1;
  }
  return result;
};
/*-----------------------------------------------------*/
export const pick = (srcObj, arrPropertyNames) => {
  const result = {};
  const entries = Object.entries(srcObj);
  for (const [key, value] of entries) {
    if (arrPropertyNames.includes(key)) {
      result[key] = value;
    }
  }
  return result;
};
/*-----------------------------------------------------*/
export const get = (srcObject, pathArr) => {
  if (!Array.isArray(pathArr)) {
    throw new Error("Path must be an array of keys");
  }
  if (typeof srcObject !== "object") {
    throw new Error("The passed variable or constant must be an object");
  }
  let result = srcObject;
  for (const key of pathArr) {
    if (
      key === null ||
      key === undefined ||
      typeof result !== "object" ||
      !(key in result)
    ) {
      return null;
    }
    result = result[key];
  }
  return result;
};
// export const get = (srcObject, pathArr) => {
//     return _.get(srcObject, pathArr, null);
// }
/*-----------------------------------------------------*/
export const fill = (srcObject, listArr, data) => {
  return Object.assign(
    srcObject,
    listArr.length === 0 ? data : _.pick(data, listArr),
  );
  // if (listArr.length === 0) {
  //     return Object.assign(srcObject, data);
  // }
  // return Object.assign(srcObject, _.pick(data, listArr));
};
/*-----------------------------------------------------*/
export const cloneDeep = (data) => {
  if (typeof data !== "object" || data === null) {
    return data;
  }
  const result = {};
  for (const [key, value] of Object.entries(data)) {
    result[key] = cloneDeep(value);
  }
  return result;
};
/*-----------------------------------------------------*/
export const make = (name, additionalProperties = {}) => {
  if (!name) {
    throw new Error("The company name must be specified.");
  }
  const createdAt = new Date().toISOString().replace("T", " ").split(".")[0]; // Формат YYYY-MM-DD HH:MM:SS
  const defaultValues = { state: "moderating", createdAt };
  return { name, ...defaultValues, ...additionalProperties };
};
/*-----------------------------------------------------*/
