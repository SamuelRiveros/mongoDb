//npm update actualiza las dependendencias, busca nuevas versiones etc

import {connect} from './helpers/db/connect.js';
import { movis } from './js/module/movis.js';

// let obj2 = new connect("Carlos")
// console.log(obj2)
let mongo = new movis()
console.log(await mongo.getAllMovis());