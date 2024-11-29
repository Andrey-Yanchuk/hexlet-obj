// index.js
import example from "./example.json" assert { type: "json" };
const getExampleJson = (object) => {
  return object;
};
export default getExampleJson;
console.log(getExampleJson(example));
