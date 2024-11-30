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
export const is = (obj1, obj2) => obj1.name === obj2.name && obj1.state === obj2.state && obj1.website === obj2.website;
/*-----------------------------------------------------*/

export const getDomainInfo = (link) => {
    let scheme = 'http';
    let name = link;
    if (link.startsWith('https://')) {
        scheme = 'https';
        name = link.replace('https://', '');
    }
    if (link.startsWith('http://')) {
        scheme = 'http';
        name = link.replace('http://', '');
    }
    return {
        scheme,
        name
    };
};