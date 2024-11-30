// index.js
import { normalize } from './exported-functions.js';

const lesson = {
  name: 'ДеструКТУРИЗАЦИЯ',
  description: 'каК удивитЬ колек',
};
normalize(lesson);
console.log(lesson);