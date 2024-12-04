// index.js
import {
  normalize,
  is,
  getDomainInfo,
  countWords,
  pick,
  get,
  fill,
  cloneDeep,
  make,
  getSortedNames,
} from "./exported-functions.js";
// import _ from "lodash";
/*-----------------------------------------------------*/
const lesson = {
  name: "ДеструКТУРИЗАЦИЯ",
  description: "каК удивитЬ колек",
};
normalize(lesson);
console.log(lesson);
/*-----------------------------------------------------*/
const company1 = {
  name: "Hexlet",
  state: "moderating",
  website: "https://hexlet.io",
};
const company2 = {
  name: "CodeBasics",
  state: "published",
  website: "https://code-basics.com",
};
const company3 = {
  name: "Hexlet",
  state: "published",
  website: "https://hexlet.io",
};
const company4 = {
  name: "Hexlet",
  state: "published",
  website: "https://hexlet.io",
};
console.log(is(company1, company2));
console.log(is(company3, company4));
/*-----------------------------------------------------*/
console.log(getDomainInfo("yandex.ru"));
console.log(getDomainInfo("https://hexlet.io"));
console.log(getDomainInfo("http://google.com"));
/*-----------------------------------------------------*/
const text1 = "one two three two ONE one wow";
const text2 = "another one sentence with strange Words words";
console.log(countWords(""));
console.log(countWords(text1));
console.log(countWords(text2));
/*-----------------------------------------------------*/
const data = {
  user: "ubuntu",
  cores: 4,
  os: "linux",
};
console.log(pick(data, ["user"]));
console.log(pick(data, ["user", "os"]));
console.log(pick(data, []));
console.log(pick(data, ["none", "cores"]));
/*-----------------------------------------------------*/
const dataTwo = {
  user: "ubuntu",
  hosts: {
    0: {
      name: "web1",
    },
    1: {
      name: "web2",
      null: 3,
      active: false,
    },
  },
};
// const dataThree = 'I`m string'; // test for data type error object
console.log(get(dataTwo, ["undefined"])); // null
console.log(get(dataTwo, ["user"])); // 'ubuntu'
console.log(get(dataTwo, ["user", "ubuntu"])); // null
console.log(get(dataTwo, ["hosts", 1, "name"])); // 'web2'
console.log(get(dataTwo, ["hosts", 0])); // { name: 'web1' }
console.log(get(dataTwo, ["hosts", 1, null])); // 3
console.log(get(dataTwo, ["hosts", 1, "active"])); // false
// console.log(get(dataThree, "hosts", 0, "name")); // test for data type error object
/*-----------------------------------------------------*/
const company = {
  name: null,
  state: "moderating",
};
const dataFour = {
  name: "Hexlet",
  state: "published",
};
console.log(fill(company, ["name"], dataFour));
// { name: 'Hexlet', state: 'moderating' }
console.log(fill(company, [], dataFour));
// { name: 'Hexlet', state: 'published'}
/*-----------------------------------------------------*/
const dataFive = {
  key: "value",
  key2: {
    key: "innerValue",
    innerKey: {
      anotherKey: "anotherValue",
    },
  },
};
const result = cloneDeep(dataFive);
console.log(result.key2 !== dataFive.key2); // true
console.log(result.key2.innerKey !== dataFive.key2.innerKey);
console.log(result);
/*-----------------------------------------------------*/
console.log(make("Hexlet"));
// { name: 'Hexlet', state: 'moderating', createdAt: <тут текущая дата> }
console.log(make("Hexlet", { website: "hexlet.io", state: "published" }));
// { name: 'Hexlet', website: 'hexlet.io', state: 'published', createdAt: <тут текущая дата> }
/*-----------------------------------------------------*/
const users = [
  { name: "Bronn", gender: "male", birthday: "1973-03-23" },
  { name: "Reigar", gender: "male", birthday: "1973-11-03" },
  { name: "Eiegon", gender: "male", birthday: "1963-11-03" },
  { name: "Sansa", gender: "female", birthday: "2012-11-03" },
]; // getSortedNames(users); // ['Bronn', 'Eiegon', 'Reigar', 'Sansa']
console.log(getSortedNames(users));
/*-----------------------------------------------------*/
