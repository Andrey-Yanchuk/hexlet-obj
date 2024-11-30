// index.js
import { normalize, is } from './exported-functions.js';
/*-----------------------------------------------------*/
const lesson = {
  name: 'ДеструКТУРИЗАЦИЯ',
  description: 'каК удивитЬ колек',
};
normalize(lesson);
console.log(lesson);
/*-----------------------------------------------------*/
const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };
const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };
const company3 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const company4 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };

console.log(is(company1, company2));
console.log(is(company3, company4));