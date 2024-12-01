// index.js
import {
  normalize,
  is,
  getDomainInfo,
  countWords,
  pick,
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
