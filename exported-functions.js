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